import { INDUSTRY_ITEMS } from './industry'
import {
  NAV_LINKS,
  PROJECTS_MENU,
  WHY_AVYRO_LINK,
} from './navMenu'
import { PRODUCT_ROUTES } from './productRoutes'
import { RESOURCES_LINKS } from './resourcesMenu'
import { USE_CASE_MENU } from './useCaseMenu'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  id: string
  title: string
  links: FooterLink[]
}

export const FOOTER_TAGLINE =
  'The all-in-one platform built for AEC firms to manage projects, people, financials, and performance—connected in one intelligent ecosystem.'

export const FOOTER_NEWSLETTER_TITLE = 'Stay Connected'
export const FOOTER_NEWSLETTER_SUBTITLE =
  'Insights, updates, and best practices for AEC firms.'

export const FOOTER_SOCIAL_LINKS: FooterLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'X', href: 'https://x.com' },
]

export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  WHY_AVYRO_LINK,
  { label: 'Solutions', href: '#do-and-outcome' },
  { label: 'Industry', href: '#industry' },
  { label: 'Testimonials', href: '#testimonials' },
  ...NAV_LINKS,
  { label: 'Book a Demo', href: '#contact-us' },
]

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Cookie Policy', href: '#cookies' },
]

export const FOOTER_SECURITY_BADGES = [
  'SOC 2 Type II',
  'ISO 27001',
  'GDPR Compliant',
] as const

export const FOOTER_COPYRIGHT =
  '© 2025 Avyro Technologies Pvt. Ltd. All rights reserved.'

const platformLinks: FooterLink[] = PROJECTS_MENU.flatMap((section) =>
  section.items.map((item) => ({
    label: item.title,
    href: item.href ?? '#',
  })),
)

const solutionLinks: FooterLink[] = [
  { label: 'Win More Projects', href: PRODUCT_ROUTES.crm },
  { label: 'Plan & Deliver Projects', href: PRODUCT_ROUTES.resource },
  { label: 'Capture Every Billable Hour', href: PRODUCT_ROUTES.timesheets },
  { label: 'Accelerate Billing & Cash Flow', href: PRODUCT_ROUTES.billing },
  { label: 'Enterprise Operations', href: PRODUCT_ROUTES.platform },
]

const industryLinks: FooterLink[] = INDUSTRY_ITEMS.map((item) => ({
  label: item.title,
  href: item.href,
}))

const useCaseLinks: FooterLink[] = USE_CASE_MENU.flatMap((section) =>
  section.items.map((item) => ({
    label: item.title,
    href: item.href,
  })),
)

const resourceLinks: FooterLink[] = RESOURCES_LINKS.map((item) => ({
  label: item.label,
  href: item.href,
}))

export const FOOTER_COLUMNS: FooterColumn[] = [
  { id: 'platform', title: 'Platform', links: platformLinks },
  { id: 'solutions', title: 'Solutions', links: solutionLinks },
  { id: 'industries', title: 'Industries', links: industryLinks },
  { id: 'use-cases', title: 'Use Cases', links: useCaseLinks },
  { id: 'resources', title: 'Resources', links: resourceLinks },
  { id: 'company', title: 'Company', links: FOOTER_COMPANY_LINKS },
]
