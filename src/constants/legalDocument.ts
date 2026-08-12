export interface LegalModule {
  title: string
  description: string
}

export interface LegalSection {
  id: string
  number: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
  modules?: LegalModule[]
  contactEmail?: string
}

export interface LegalHero {
  eyebrow: string
  title: string
  subtitle: string
  updatedLabel: string
  updatedDate: string
}

export const LEGAL_CONTACT_EMAIL = 'manas@avyro.io'
