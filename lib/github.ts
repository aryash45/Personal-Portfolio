export interface GitHubRepoData {
  description: string | null
  stars: number
  language: string | null
}

/**
 * Fetch live repo metadata from the GitHub REST API.
 * Uses Next.js `fetch` with ISR — cached and revalidated every hour.
 * Falls back gracefully (returns nulls/0) if the request fails.
 */
export async function fetchRepoData(
  owner: string,
  repo: string
): Promise<GitHubRepoData> {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      // Next.js ISR — serve cached, revalidate in background after 1 hour
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.warn(`[github] Failed to fetch ${owner}/${repo}: ${res.status}`)
      return { description: null, stars: 0, language: null }
    }

    const data = await res.json()
    return {
      description: data.description ?? null,
      stars: data.stargazers_count ?? 0,
      language: data.language ?? null,
    }
  } catch (err) {
    console.warn(`[github] Network error for ${owner}/${repo}:`, err)
    return { description: null, stars: 0, language: null }
  }
}
