import React from "react"

/**
 * Projects Server Component
 * -------------------------
 * Runs on the server (no "use client"). Fetches live GitHub data for each
 * project in parallel, merges with local visual config, then passes the
 * merged list to the client component for rendering.
 *
 * Next.js ISR: each fetch() call carries `next: { revalidate: 3600 }` — the
 * page is served from cache and silently refreshed every hour.
 */

import { projectConfigs } from "@/lib/projects.config"
import { fetchRepoData } from "@/lib/github"
import { Projects } from "./projects"

const GITHUB_OWNER = "aryash45"

async function ProjectsData() {
  // Fetch all repos in parallel — no serial waterfall
  const githubData = await Promise.all(
    projectConfigs.map((config) => fetchRepoData(GITHUB_OWNER, config.repo))
  )

  // Merge: GitHub wins on description (if non-empty), else fall back to local
  const mergedProjects = projectConfigs.map((config, i) => {
    const gh = githubData[i]
    return {
      ...config,
      description:
        gh.description && gh.description.trim().length > 0
          ? gh.description
          : config.fallbackDescription,
      stars: gh.stars,
      language: gh.language,
    }
  })

  return <Projects projects={mergedProjects} />
}

// TypeScript's JSX checker doesn't understand async Server Components (TS2786).
// This synchronous wrapper is the standard Next.js App Router workaround.
export function ProjectsServer() {
  return ProjectsData() as unknown as React.ReactElement
}
