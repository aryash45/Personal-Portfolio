import { NextResponse } from "next/server"

// To enable real email delivery:
//   1. Sign up at https://resend.com (free tier: 100 emails/day)
//   2. Get your API key from the dashboard
//   3. Add to .env.local:
//        RESEND_API_KEY=re_xxxxxx
//        CONTACT_EMAIL=your@email.com

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL || "aryash@email.com"

    if (!apiKey) {
      // Development fallback: log the submission and return success
      console.log("📧 Contact form submission (no RESEND_API_KEY set):", { name, email, message })
      return NextResponse.json({ success: true, dev: true })
    }

    // Call Resend REST API directly — no package needed
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: toEmail,
        reply_to: email,
        subject: `New Message from ${name} — Portfolio`,
        html: `
          <div style="font-family: monospace; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #eee; padding: 32px; border-radius: 12px; border: 1px solid #222;">
            <h2 style="color: #a78bfa; margin-top: 0;">New Portfolio Contact</h2>
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">From</p>
            <p style="font-size: 18px; margin: 4px 0 16px;">${name}</p>
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Email</p>
            <p style="font-size: 16px; margin: 4px 0 16px;"><a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Message</p>
            <p style="font-size: 15px; line-height: 1.6; margin: 4px 0; white-space: pre-wrap;">${message}</p>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error("Resend API error:", err)
      throw new Error("Email delivery failed")
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 })
  }
}
