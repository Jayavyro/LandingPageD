import { PRODUCT_LINES_MENU, WHY_AVYRO_LINK } from './navMenu'

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
  'We help AEC firms run the whole business — from first lead to final invoice — on one operational record.'

export const FOOTER_NEWSLETTER_TITLE = 'Stay Connected'
export const FOOTER_NEWSLETTER_SUBTITLE =
  'Insights, updates, and best practices for AEC firms.'

export const FOOTER_SOCIAL_LINKS: FooterLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/avyrosolutions/posts/?feedView=all',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/avyro.solutions?igsh=MWFlNmdua2tma2o4Yg==',
  },
]

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Cookie Policy', href: '#cookies' },
]

export const FOOTER_SECURITY_BADGES = ['ISO 27001'] as const

export const FOOTER_COPYRIGHT =
  '© 2026 Avyro Technologies Pvt. Ltd. All rights reserved.'

const productLinks: FooterLink[] = PRODUCT_LINES_MENU.map((item) => ({
  label: item.badge ?? item.title,
  href: item.href ?? '/',
}))

const exploreLinks: FooterLink[] = [
  { label: 'The Story', href: '/#the-story' },
  { label: 'The Solution', href: '/#the-solution' },
  { label: 'One Record Week', href: '/#one-record-week' },
  { label: 'Explore Platform', href: '/#explore-platform' },
  { label: 'Estimate the Leak', href: '/#financial-calculator' },
]

const companyLinks: FooterLink[] = [
  WHY_AVYRO_LINK,
  { label: 'About Avyro', href: '/#company' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact Us', href: '/#contact-us' },
  { label: 'Book a Demo', href: '/#contact-us' },
]

export const FOOTER_COLUMNS: FooterColumn[] = [
  { id: 'products', title: 'Products', links: productLinks },
  { id: 'explore', title: 'Explore', links: exploreLinks },
  { id: 'company', title: 'Company', links: companyLinks },
]
