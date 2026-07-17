/**
 * Avyro landing-page lead handler (Google Apps Script)
 *
 * Sheet: https://docs.google.com/spreadsheets/d/1HCvUuXi8EYEG5Zzw_8qQD06BxFie_e1ql04M7vo3ZKY/edit
 *
 * After changes: Deploy → Manage deployments → Edit → New version → Deploy
 */

var SPREADSHEET_ID = '1HCvUuXi8EYEG5Zzw_8qQD06BxFie_e1ql04M7vo3ZKY'
var SHEET_NAME = 'Leads'
var NOTIFY_EMAIL = 'mmehrotra@avyro.in'
var MAX_DAILY_EMAILS_PER_USER = 2

var HEADERS = [
  'Timestamp',
  'Source',
  'Full Name',
  'Company',
  'Work Email',
  'Phone',
  'Message',
]

var WORK_EMAIL_COLUMN = 4
var PHONE_COLUMN = 5

function doPost(e) {
  try {
    var payload = parsePayload_(e)
    var email = normalizeEmail_(payload.workEmail || payload.email)
    var phone = normalizePhone_(payload.phoneNumber)

    if (!email) {
      return jsonResponse_({ ok: false, error: 'Email is required.' })
    }

    if (emailExistsInLeads_(email)) {
      return jsonResponse_({
        ok: false,
        error: 'This email address has already been submitted.',
      })
    }

    if (phone && phoneExistsInLeads_(phone)) {
      return jsonResponse_({
        ok: false,
        error: 'This phone number has already been submitted.',
      })
    }

    if (hasReachedDailyEmailLimit_(email)) {
      return jsonResponse_({
        ok: false,
        error:
          'Daily limit reached for this email address. You can submit up to 2 requests per day.',
      })
    }

    var row = {
      timestamp: new Date(),
      source: String(payload.source || 'unknown').trim(),
      fullName: String(payload.fullName || '').trim(),
      companyName: String(payload.companyName || '').trim(),
      workEmail: email,
      phoneNumber: String(payload.phoneNumber || '').trim(),
      message: String(payload.message || '').trim(),
    }

    appendLeadRow_(row)
    sendLeadEmail_(row)

    return jsonResponse_({ ok: true })
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: error && error.message ? error.message : 'Server error',
    })
  }
}

function doGet() {
  return jsonResponse_({
    ok: true,
    message: 'Avyro form handler is running. POST JSON leads to this URL.',
  })
}

function setupLeadsSheet() {
  var sheet = getLeadsSheet_()
  Logger.log('Leads sheet ready in: ' + getSpreadsheet_().getUrl())
  return sheet.getName()
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Empty request body.')
  }

  var data = JSON.parse(e.postData.contents)

  if (typeof data !== 'object' || data === null) {
    throw new Error('Invalid JSON body.')
  }

  return data
}

function normalizeEmail_(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
}

function normalizePhone_(value) {
  var digits = String(value || '').replace(/\D/g, '')
  return digits.length >= 6 ? digits : ''
}

function getLeadValues_() {
  var sheet = getLeadsSheet_()
  var lastRow = sheet.getLastRow()

  if (lastRow <= 1) {
    return []
  }

  return sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues()
}

function emailExistsInLeads_(email) {
  var values = getLeadValues_()

  for (var i = 0; i < values.length; i++) {
    if (normalizeEmail_(values[i][WORK_EMAIL_COLUMN]) === email) {
      return true
    }
  }

  return false
}

function phoneExistsInLeads_(phone) {
  var values = getLeadValues_()

  for (var i = 0; i < values.length; i++) {
    if (normalizePhone_(values[i][PHONE_COLUMN]) === phone) {
      return true
    }
  }

  return false
}

function getStartOfToday_() {
  var today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}

function hasReachedDailyEmailLimit_(email) {
  return getDailySubmissionCount_(email) >= MAX_DAILY_EMAILS_PER_USER
}

function getDailySubmissionCount_(email) {
  var values = getLeadValues_()
  var startOfToday = getStartOfToday_()
  var count = 0

  for (var i = 0; i < values.length; i++) {
    var rowEmail = normalizeEmail_(values[i][WORK_EMAIL_COLUMN])
    var rowTimestamp = values[i][0]

    if (rowEmail !== email || !(rowTimestamp instanceof Date)) {
      continue
    }

    if (rowTimestamp >= startOfToday) {
      count++
    }
  }

  return count
}

function getSpreadsheet_() {
  var active = SpreadsheetApp.getActiveSpreadsheet()
  if (active) return active

  var id = String(SPREADSHEET_ID || '').trim()
  if (!id) {
    throw new Error(
      'Set SPREADSHEET_ID at the top of this script, or open Apps Script from your Google Sheet.'
    )
  }

  return SpreadsheetApp.openById(id)
}

function getLeadsSheet_() {
  var ss = getSpreadsheet_()
  var sheet = ss.getSheetByName(SHEET_NAME)

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
    sheet.setFrozenRows(1)
  }

  return sheet
}

function appendLeadRow_(row) {
  getLeadsSheet_().appendRow([
    row.timestamp,
    row.source,
    row.fullName,
    row.companyName,
    row.workEmail,
    row.phoneNumber,
    row.message,
  ])
}

function getSenderLabel_(row) {
  return row.fullName || row.workEmail
}

function sendLeadEmail_(row) {
  var senderLabel = getSenderLabel_(row)
  var subject = 'New Avyro inquiry · ' + senderLabel
  var plainBody = buildPlainEmailBody_(row)
  var htmlBody = buildHtmlEmailBody_(row)

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: row.workEmail,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody,
  })
}

function buildPlainEmailBody_(row) {
  var senderLabel = getSenderLabel_(row)

  return [
    'New inquiry from the Avyro website',
    '',
    'Source: ' + formatSourceLabel_(row.source),
    'Full Name: ' + formatValue_(row.fullName),
    'Company: ' + formatValue_(row.companyName),
    'Work Email: ' + row.workEmail,
    'Phone: ' + formatValue_(row.phoneNumber),
    'Message: ' + formatValue_(row.message),
    'Submitted: ' + formatTimestamp_(row.timestamp),
    '',
    'Reply to this email to contact ' + senderLabel + '.',
  ].join('\n')
}

function buildHtmlEmailBody_(row) {
  var senderLabel = getSenderLabel_(row)
  var sourceLabel = formatSourceLabel_(row.source)
  var message = formatValue_(row.message)
  var replyUrl = 'mailto:' + encodeURIComponent(row.workEmail)

  return [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head>',
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<title>New Avyro inquiry</title>',
    '</head>',
    '<body style="margin:0;padding:0;background-color:#f4f6fb;">',
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f4f6fb;padding:32px 16px;">',
    '<tr><td align="center">',
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;background-color:#ffffff;border:1px solid #e8ebf3;border-radius:16px;overflow:hidden;box-shadow:0 18px 48px -24px rgba(18,22,42,0.28);">',

    // Header
    '<tr><td style="padding:0;">',
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">',
    '<tr><td style="height:6px;background:linear-gradient(90deg,#4b6ef5 0%,#7c5cf6 100%);font-size:0;line-height:0;">&nbsp;</td></tr>',
    '<tr><td style="padding:28px 32px 24px;background-color:#12162a;">',
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">',
    '<tr>',
    '<td style="font-family:Arial,Helvetica,sans-serif;">',
    '<div style="font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#9db0ff;margin-bottom:10px;">Avyro</div>',
    '<div style="font-size:24px;line-height:1.25;font-weight:700;color:#ffffff;">New website inquiry</div>',
    '<div style="margin-top:8px;font-size:14px;line-height:1.6;color:rgba(244,246,255,0.78);">A visitor submitted the ' + escapeHtml_(sourceLabel) + ' form.</div>',
    '</td>',
    '<td align="right" valign="top" style="font-family:Arial,Helvetica,sans-serif;">',
    '<span style="display:inline-block;padding:8px 12px;border-radius:999px;background:rgba(75,110,245,0.18);border:1px solid rgba(157,176,255,0.35);font-size:12px;font-weight:700;color:#dbe4ff;white-space:nowrap;">' + escapeHtml_(sourceLabel) + '</span>',
    '</td>',
    '</tr>',
    '</table>',
    '</td></tr>',
    '</table>',
    '</td></tr>',

    // Intro
    '<tr><td style="padding:28px 32px 8px;font-family:Arial,Helvetica,sans-serif;">',
    '<p style="margin:0 0 6px;font-size:15px;line-height:1.6;color:#4b5066;">You received a new lead from <strong style="color:#12162a;">' + escapeHtml_(senderLabel) + '</strong>.</p>',
    '<p style="margin:0;font-size:13px;line-height:1.6;color:#7a8096;">Submitted on ' + escapeHtml_(formatTimestamp_(row.timestamp)) + '</p>',
    '</td></tr>',

    // Details card
    '<tr><td style="padding:16px 32px 8px;">',
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid #eceef5;border-radius:14px;overflow:hidden;background-color:#fafbff;">',
    detailRow_('Full Name', row.fullName, false),
    detailRow_('Company', row.companyName, false),
    detailRow_('Work Email', row.workEmail, false, true),
    detailRow_('Phone', row.phoneNumber, false),
    detailRow_('Source', sourceLabel, true),
    '</table>',
    '</td></tr>',

    // Message
    '<tr><td style="padding:16px 32px 8px;font-family:Arial,Helvetica,sans-serif;">',
    '<div style="margin-bottom:10px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#7a8096;">Message</div>',
    '<div style="padding:18px 20px;border:1px solid #eceef5;border-radius:14px;background-color:#ffffff;font-size:15px;line-height:1.7;color:#12162a;white-space:pre-wrap;">' + escapeHtml_(message) + '</div>',
    '</td></tr>',

    // CTA
    '<tr><td style="padding:20px 32px 32px;" align="center">',
    '<a href="' + replyUrl + '" style="display:inline-block;padding:14px 24px;border-radius:999px;background:linear-gradient(135deg,#4b6ef5 0%,#7c5cf6 100%);color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-decoration:none;box-shadow:0 12px 28px -14px rgba(75,110,245,0.85);">Reply to ' + escapeHtml_(senderLabel) + '</a>',
    '</td></tr>',

    // Footer
    '<tr><td style="padding:18px 32px 24px;border-top:1px solid #eceef5;background-color:#fafbff;font-family:Arial,Helvetica,sans-serif;">',
    '<p style="margin:0;font-size:12px;line-height:1.6;color:#7a8096;text-align:center;">This notification was sent automatically from the Avyro landing page.<br>Reply directly to reach the sender at <a href="' + replyUrl + '" style="color:#4b6ef5;text-decoration:none;font-weight:600;">' + escapeHtml_(row.workEmail) + '</a>.</p>',
    '</td></tr>',

    '</table>',
    '</td></tr>',
    '</table>',
    '</body>',
    '</html>',
  ].join('')
}

function detailRow_(label, value, isLast, isEmail) {
  var border = isLast ? '' : 'border-bottom:1px solid #eceef5;'
  var content = escapeHtml_(formatValue_(value))

  if (isEmail && value) {
    content =
      '<a href="mailto:' +
      encodeURIComponent(String(value).trim()) +
      '" style="color:#4b6ef5;text-decoration:none;font-weight:600;">' +
      content +
      '</a>'
  }

  return [
    '<tr>',
    '<td style="padding:14px 18px;' + border + '">',
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">',
    '<tr>',
    '<td valign="top" width="34%" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#7a8096;">' + escapeHtml_(label) + '</td>',
    '<td valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#12162a;">' + content + '</td>',
    '</tr>',
    '</table>',
    '</td>',
    '</tr>',
  ].join('')
}

function formatSourceLabel_(source) {
  var labels = {
    hero: 'Hero signup',
    newsletter: 'Newsletter',
    contact: 'Contact form',
  }

  return labels[String(source || '').trim()] || formatValue_(source)
}

function formatValue_(value) {
  var text = String(value || '').trim()
  return text || '—'
}

function formatTimestamp_(value) {
  if (!(value instanceof Date)) {
    return '—'
  }

  return Utilities.formatDate(value, Session.getScriptTimeZone(), 'dd MMM yyyy, HH:mm')
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  )
}
