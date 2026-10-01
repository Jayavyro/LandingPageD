export type FormLeadSource = 'hero' | 'newsletter' | 'contact'

export interface FormLeadPayload {
  source: FormLeadSource
  workEmail: string
  fullName?: string
  companyName?: string
  phoneNumber?: string
  message?: string
}

interface SubmitFormLeadResult {
  ok: boolean
  error?: string
}

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim() ?? ''
const POWER_AUTOMATE_URL =
  import.meta.env.VITE_POWER_AUTOMATE_URL?.trim() ?? ''
const NOTIFY_EMAIL = 'mmehrotra@avyro.in'

interface NormalizedLead {
  source: FormLeadSource
  workEmail: string
  fullName: string
  companyName: string
  phoneNumber: string
  message: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function formatValue(value: string) {
  return value ? escapeHtml(value) : '—'
}

function buildPowerAutomateBody(lead: NormalizedLead) {
  const source =
    lead.source === 'hero'
      ? 'Hero form'
      : lead.source === 'newsletter'
        ? 'Newsletter form'
        : 'Contact form'

  return `
    <h2>New inquiry from the Avyro website</h2>
    <p><strong>Source:</strong> ${source}</p>
    <p><strong>Full Name:</strong> ${formatValue(lead.fullName)}</p>
    <p><strong>Company:</strong> ${formatValue(lead.companyName)}</p>
    <p><strong>Work Email:</strong> <a href="mailto:${escapeHtml(lead.workEmail)}">${escapeHtml(lead.workEmail)}</a></p>
    <p><strong>Phone:</strong> ${formatValue(lead.phoneNumber)}</p>
    <p><strong>Message:</strong> ${formatValue(lead.message).replaceAll('\n', '<br>')}</p>
  `.trim()
}

async function submitToPowerAutomate(lead: NormalizedLead) {
  if (!POWER_AUTOMATE_URL) {
    return false
  }

  const senderLabel = lead.fullName || lead.workEmail
  const response = await fetch(POWER_AUTOMATE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: NOTIFY_EMAIL,
      subject: `New Avyro inquiry · ${senderLabel}`,
      body: buildPowerAutomateBody(lead),
    }),
  })

  return response.ok
}

async function submitToGoogleScript(
  lead: NormalizedLead,
): Promise<SubmitFormLeadResult> {
  if (!SCRIPT_URL) {
    return {
      ok: false,
      error: 'Form submissions are not configured yet.',
    }
  }

  try {
    // text/plain avoids a CORS preflight against Google Apps Script web apps.
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(lead),
      redirect: 'follow',
    })

    const data = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null

    if (!response.ok || data?.ok === false) {
      return {
        ok: false,
        error: data?.error || 'Something went wrong. Please try again.',
      }
    }

    return { ok: true }
  } catch {
    return {
      ok: false,
      error: 'Unable to submit right now. Please try again.',
    }
  }
}

export async function submitFormLead(
  payload: FormLeadPayload,
): Promise<SubmitFormLeadResult> {
  const workEmail = payload.workEmail.trim()

  if (!workEmail) {
    return { ok: false, error: 'Email is required.' }
  }

  const lead: NormalizedLead = {
    source: payload.source,
    workEmail,
    fullName: payload.fullName?.trim() ?? '',
    companyName: payload.companyName?.trim() ?? '',
    phoneNumber: payload.phoneNumber?.trim() ?? '',
    message: payload.message?.trim() ?? '',
  }

  try {
    if (await submitToPowerAutomate(lead)) {
      return { ok: true }
    }
  } catch {
    // Fall through to the existing Google Apps Script submission.
  }

  return submitToGoogleScript(lead)
}
