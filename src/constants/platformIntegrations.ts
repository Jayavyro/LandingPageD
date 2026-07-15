import deltekAjeraLogo from '../assets/integrations/deltek-ajera.svg'
import googleCalendarLogo from '../assets/integrations/google-calendar.svg'
import microsoftOutlookLogo from '../assets/integrations/microsoft-outlook.svg'
import quickbooksLogo from '../assets/integrations/quickbooks.svg'
import sharepointLogo from '../assets/integrations/sharepoint.svg'

export interface IntegrationPartner {
  id: string
  name: string
  category: string
  logo: string
}

export const INTEGRATION_PARTNERS: IntegrationPartner[] = [
  {
    id: 'deltek-ajera',
    name: 'Deltek Ajera',
    category: 'AEC accounting & project ERP',
    logo: deltekAjeraLogo,
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    category: 'Scheduling & milestones',
    logo: googleCalendarLogo,
  },
  {
    id: 'microsoft-outlook',
    name: 'Microsoft Outlook',
    category: 'Email & calendar sync',
    logo: microsoftOutlookLogo,
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    category: 'General ledger & finance',
    logo: quickbooksLogo,
  },
  {
    id: 'sharepoint',
    name: 'SharePoint',
    category: 'Documents & file storage',
    logo: sharepointLogo,
  },
]

export const INTEGRATION_PARTNER_IDS = INTEGRATION_PARTNERS.map((partner) => partner.id)

export function getIntegrationPartners(ids: string[]): IntegrationPartner[] {
  return ids
    .map((id) => INTEGRATION_PARTNERS.find((partner) => partner.id === id))
    .filter((partner): partner is IntegrationPartner => Boolean(partner))
}
