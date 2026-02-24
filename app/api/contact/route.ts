import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'saveniamanuel@gmail.com'
    const fromSource = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'
    const fromAddressMatch = fromSource.match(/<([^>]+)>/)
    const fromAddress = fromAddressMatch ? fromAddressMatch[1] : fromSource
    const fromEmail = `${name} <${fromAddress}>`

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
