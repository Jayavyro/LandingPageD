import type { LucideIcon } from 'lucide-react'

export interface ShortFeatureBenefit {
  title: string
  body: string
}

export interface ShortFeatureCapability {
  icon: LucideIcon
  title: string
  body: string
}

export interface ShortFeatureAudience {
  title: string
  body: string
}

export interface ShortFeaturePageContent {
  seo: {
    title: string
    description: string
  }
  hero: {
    eyebrow: string
    headlineBefore: string
    headlineAccent: string
    tagline: string
    supporting: string
    cta: { label: string; href: string }
    visual: { src: string; alt: string }
  }
  overview: {
    eyebrow: string
    heading: string
    body: string
    audienceEyebrow: string
    audienceHeading: string
    audience: ShortFeatureAudience[]
  }
  benefits: {
    eyebrow: string
    heading: string
    supporting: string
    items: ShortFeatureBenefit[]
  }
  features: {
    eyebrow: string
    heading: string
    supporting: string
    items: ShortFeatureCapability[]
  }
  screenshot: {
    eyebrow: string
    heading: string
    body: string
    workflow: string[]
    visual: { src: string; alt: string }
  }
  finalCta: {
    heading: string
    supporting: string
    cta: { label: string; href: string }
  }
}
