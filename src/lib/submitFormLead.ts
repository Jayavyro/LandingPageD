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

export async function submitFormLead(
  payload: FormLeadPayload,
): Promise<SubmitFormLeadResult> {
  const workEmail = payload.workEmail.trim()

  if (!workEmail) {
    return { ok: false, error: 'Email is required.' }
  }

  if (!SCRIPT_URL) {
    return {
      ok: false,
      error: 'Form submissions are not configured yet.',
    }
  }

  const body = JSON.stringify({
    source: payload.source,
    workEmail,
    fullName: payload.fullName?.trim() ?? '',
    companyName: payload.companyName?.trim() ?? '',
    phoneNumber: payload.phoneNumber?.trim() ?? '',
    message: payload.message?.trim() ?? '',
  })

  try {
    // text/plain avoids a CORS preflight against Google Apps Script web apps.
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body,
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
