import {NextResponse} from 'next/server'

const portalId = process.env.HUBSPOT_PORTAL_ID || '149410324'
const formId = process.env.HUBSPOT_FORM_ID || '0befd475-8a4a-4afa-a798-e80ffce9de32'

type ContactRequest = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  website?: string
  pageUri?: string
}

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  let body: ContactRequest

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({message: 'Invalid request.'}, {status: 400})
  }

  if (clean(body.website)) return NextResponse.json({ok: true})

  const firstName = clean(body.firstName)
  const lastName = clean(body.lastName)
  const email = clean(body.email)
  const phone = clean(body.phone)
  const subject = clean(body.subject)
  const message = clean(body.message)

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json(
      {message: 'Please complete your name, email address, and phone number.'},
      {status: 400},
    )
  }

  const combinedMessage = [subject && `Subject: ${subject}`, message]
    .filter(Boolean)
    .join('\n\n') || 'I would like to book a FolioCuts demo.'

  const hutk = request.headers
    .get('cookie')
    ?.split(';')
    .map((cookie) => cookie.trim().split('='))
    .find(([name]) => name === 'hubspotutk')?.[1]
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()

  const hubspotResponse = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        submittedAt: Date.now(),
        fields: [
          {name: 'firstname', value: firstName},
          {name: 'lastname', value: lastName},
          {name: 'email', value: email},
          {name: 'phone', value: phone},
          {name: 'message', value: combinedMessage},
        ],
        context: {
          ...(hutk ? {hutk} : {}),
          ...(forwardedFor ? {ipAddress: forwardedFor} : {}),
          pageUri: clean(body.pageUri) || 'https://foliocuts.markian.fit/contact',
          pageName: 'Book a FolioCuts demo',
        },
      }),
    },
  )

  if (!hubspotResponse.ok) {
    const details = await hubspotResponse.text()
    console.error('HubSpot form submission failed', hubspotResponse.status, details)
    return NextResponse.json(
      {message: 'We could not send your request. Please try again shortly.'},
      {status: 502},
    )
  }

  return NextResponse.json({ok: true})
}
