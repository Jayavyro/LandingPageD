/**
 * Aggregates exportable marketing content from site constants.
 */
import { HERO_BADGE, HERO_HEADLINE_LINE, HERO_HEADLINE_ACCENT_LINE, HERO_SUBHEAD, HERO_CALCULATOR_CTA } from '../src/constants/hero'
import { TRUST_BAR_LABEL, TRUST_BAR_BRAND, TRUST_BAR_STATS } from '../src/constants/trustBar'
import {
  REVENUE_LEAKS_BADGE,
  REVENUE_LEAKS_HEADLINE,
  REVENUE_LEAKS_SUBTITLE,
  REVENUE_LEAKS_ITEMS,
} from '../src/constants/revenueLeaks'
import {
  THE_SOLUTION_BADGE,
  THE_SOLUTION_HEADLINE,
  THE_SOLUTION_JOURNEY_INTRO,
  THE_SOLUTION_JOURNEY,
} from '../src/constants/theSolution'
import {
  DO_AND_OUTCOME_BADGE,
  DO_AND_OUTCOME_HEADLINE,
  DO_AND_OUTCOME_HEADLINE_ACCENT,
  DO_AND_OUTCOME_SUBTITLE,
  DO_AND_OUTCOME_ITEMS,
  DO_AND_OUTCOME_ROLLUP,
  DO_AND_OUTCOME_ROLLUP_ACCENT,
  DO_AND_OUTCOME_DO_LABEL,
  DO_AND_OUTCOME_GET_LABEL,
} from '../src/constants/doAndOutcome'
import {
  ONE_RECORD_BADGE,
  ONE_RECORD_HEADLINE,
  ONE_RECORD_SUBTITLE,
  ONE_RECORD_FLOW,
  ONE_RECORD_CARD_LABEL,
  ONE_RECORD_WEDGE,
  ONE_RECORD_PROOF_NOTE,
} from '../src/constants/oneRecordWeek'
import {
  EXPLORE_PLATFORM_BADGE,
  EXPLORE_PLATFORM_HEADLINE,
  EXPLORE_PLATFORM_HEADLINE_ACCENT,
  EXPLORE_PLATFORM_SUBTITLE,
  EXPLORE_PLATFORM_CTA_LABEL,
  EXPLORE_PLATFORM_MODULES,
} from '../src/constants/explorePlatform'
import {
  COMPETITIVE_TABLE_BADGE,
  COMPETITIVE_TABLE_HEADLINE_LINE,
  COMPETITIVE_TABLE_HEADLINE_ACCENT_LINE,
  COMPETITIVE_TABLE_SUBTITLE,
  COMPETITIVE_TABLE_COLUMNS,
  COMPETITIVE_TABLE_ROWS,
  COMPETITIVE_TABLE_LEGEND,
  COMPETITIVE_RATING_META,
} from '../src/constants/competitiveTable'
import {
  CASE_STUDY_BADGE,
  CASE_STUDY_HEADLINE_LINES,
  CASE_STUDY_SUBTITLE,
  CASE_STUDY_META,
  CASE_STUDY_WHO,
  CASE_STUDY_PROBLEM,
  CASE_STUDY_SOLUTION,
  CASE_STUDY_QUOTE,
  CASE_STUDY_METRICS,
  CASE_STUDY_PRIMARY_CTA,
  CASE_STUDY_SECONDARY_CTA,
  CASE_STUDY_FOOTNOTE,
} from '../src/constants/caseStudy'
import {
  CALCULATOR_BADGE,
  CALCULATOR_HEADLINE,
  CALCULATOR_HEADLINE_ACCENT,
  CALCULATOR_SUBTITLE,
  CALCULATOR_BRIDGE,
  CALCULATOR_INPUT_LABELS,
  CALCULATOR_RESULTS_LABEL,
  CALCULATOR_PRIMARY_LABEL,
  CALCULATOR_PRIMARY_SUB,
  CALCULATOR_MONTHLY_LABEL,
  CALCULATOR_HOURS_LABEL,
  CALCULATOR_CURRENT_LABEL,
  CALCULATOR_PROJECTED_LABEL,
  CALCULATOR_TRUST_NOTE,
  CALCULATOR_CTA_LABEL,
  AVYRO_RECOVERY_RATE,
} from '../src/constants/financialCalculator'
import {
  PRICING_HERO,
  PRICING_TIERS,
  PRICING_DISCLAIMER,
  PRICING_ALL_MODULES,
  PRICING_STARTER_MODULE_SET,
  PRICING_FAQ,
} from '../src/constants/pricingPage'
import { TESTIMONIALS_TITLE, TESTIMONIALS_SUBTITLE, TESTIMONIALS } from '../src/constants/testimonials'
import { FAQ_SUBTITLE, FAQ_ITEMS, FAQ_TRUST_ITEMS } from '../src/constants/faq'
import {
  CONTACT_BADGE,
  CONTACT_TITLE,
  CONTACT_SUBTITLE,
  CONTACT_OUTCOME_LINE,
  CONTACT_PRIVACY_NOTE,
  CONTACT_CHANNELS,
} from '../src/constants/contactUs'
import {
  FOOTER_TAGLINE,
  FOOTER_COLUMNS,
  FOOTER_NEWSLETTER_TITLE,
  FOOTER_NEWSLETTER_SUBTITLE,
  FOOTER_COPYRIGHT,
  FOOTER_LEGAL_LINKS,
  FOOTER_SECURITY_BADGES,
  FOOTER_SOCIAL_LINKS,
} from '../src/constants/footer'
import {
  PROJECT_MANAGERS_EYEBROW,
  PROJECT_MANAGERS_HEADLINE,
  PROJECT_MANAGERS_SUBTITLE,
  BEFORE_CARD,
  AFTER_CARD,
  CAPABILITIES_EYEBROW,
  CAPABILITIES_TITLE,
  PROJECT_CAPABILITIES,
  PM_QUESTIONS_EYEBROW,
  PM_QUESTIONS_TITLE,
  PROJECT_MANAGER_QUESTIONS,
} from '../src/constants/projectManagers'
import {
  PRINCIPAL_OWNERS_EYEBROW,
  PRINCIPAL_OWNERS_HEADLINE,
  PRINCIPAL_OWNERS_SUBTITLE,
  PO_BEFORE_CARD,
  PO_AFTER_CARD,
  PO_CAPABILITIES_EYEBROW,
  PO_CAPABILITIES_TITLE,
  PRINCIPAL_CAPABILITIES,
  PO_QUESTIONS_EYEBROW,
  PO_QUESTIONS_TITLE,
  PRINCIPAL_OWNER_QUESTIONS,
} from '../src/constants/principalOwners'
import {
  OPERATIONS_LEADERS_EYEBROW,
  OPERATIONS_LEADERS_HEADLINE,
  OPERATIONS_LEADERS_SUBTITLE,
  OPS_BEFORE_CARD,
  OPS_AFTER_CARD,
  OPS_CAPABILITIES_EYEBROW,
  OPS_CAPABILITIES_TITLE,
  OPERATIONS_CAPABILITIES,
  OPS_QUESTIONS_EYEBROW,
  OPS_QUESTIONS_TITLE,
  OPERATIONS_LEADER_QUESTIONS,
} from '../src/constants/operationsLeaders'
import {
  ACCOUNTANTS_CFOS_EYEBROW,
  ACCOUNTANTS_CFOS_HEADLINE,
  ACCOUNTANTS_CFOS_SUBTITLE,
  CFO_BEFORE_CARD,
  CFO_AFTER_CARD,
  CFO_CAPABILITIES_EYEBROW,
  CFO_CAPABILITIES_TITLE,
  ACCOUNTANT_CAPABILITIES,
  CFO_QUESTIONS_EYEBROW,
  CFO_QUESTIONS_TITLE,
  ACCOUNTANT_CFO_QUESTIONS,
} from '../src/constants/accountantsCfos'
import { RESOURCES_HERO } from '../src/constants/resourcesPage'
import { RESOURCES_LINKS } from '../src/constants/resourcesMenu'
import {
  RESOURCE_TAB_INTROS,
  RESOURCE_BLOG_POSTS,
  RESOURCE_CASE_STUDIES,
  RESOURCE_VIDEOS,
  RESOURCE_DOC_SECTIONS,
  RESOURCE_BENEFIT_GROUPS,
} from '../src/constants/resourcesContent'
import { COMPETITIVE_COMPARISONS } from '../src/constants/competitiveComparisons'
import { PRODUCT_PAGES, PLATFORM_PAGE, PRODUCT_PAGE_LABELS } from '../src/constants/productPages'
import { FEATURE_PAGES } from '../src/constants/featurePages'
import { INDUSTRY_PAGES, INDUSTRY_PAGE_LABELS } from '../src/constants/industryPages'
import { INTEGRATION_PARTNERS } from '../src/constants/platformIntegrations'
import { PRODUCT_ROUTES } from '../src/constants/productRoutes'

const STRIP_KEYS = new Set([
  'icon',
  'Icon',
  'image',
  'heroImage',
  'showcase',
  'logo',
  'src',
  'visual',
  'imageAlt',
])

function stripIcons<T>(value: T): T {
  return JSON.parse(
    JSON.stringify(value, (key, val) => {
      if (STRIP_KEYS.has(key)) return undefined
      if (val instanceof Set) return [...val]
      if (typeof val === 'function') return undefined
      // Drop inlined asset URL blobs / data URIs to keep export small
      if (typeof val === 'string' && (val.startsWith('data:') || val.includes('/assets/'))) {
        return undefined
      }
      return val
    }),
  )
}

const siteContent = stripIcons({
  home: {
    hero: {
      badge: HERO_BADGE,
      headline: `${HERO_HEADLINE_LINE} ${HERO_HEADLINE_ACCENT_LINE}`,
      subhead: HERO_SUBHEAD,
      calculatorCta: HERO_CALCULATOR_CTA,
      trust: { label: TRUST_BAR_LABEL, brand: TRUST_BAR_BRAND, stats: TRUST_BAR_STATS },
    },
    revenueLeaks: {
      badge: REVENUE_LEAKS_BADGE,
      headline: REVENUE_LEAKS_HEADLINE,
      subtitle: REVENUE_LEAKS_SUBTITLE,
      items: REVENUE_LEAKS_ITEMS,
    },
    theSolution: {
      badge: THE_SOLUTION_BADGE,
      headline: THE_SOLUTION_HEADLINE,
      journeyIntro: THE_SOLUTION_JOURNEY_INTRO,
      journey: THE_SOLUTION_JOURNEY,
    },
    doAndOutcome: {
      badge: DO_AND_OUTCOME_BADGE,
      headline: DO_AND_OUTCOME_HEADLINE,
      accent: DO_AND_OUTCOME_HEADLINE_ACCENT,
      subtitle: DO_AND_OUTCOME_SUBTITLE,
      doLabel: DO_AND_OUTCOME_DO_LABEL,
      outcomeLabel: DO_AND_OUTCOME_GET_LABEL,
      items: DO_AND_OUTCOME_ITEMS,
      rollup: DO_AND_OUTCOME_ROLLUP,
      rollupAccent: DO_AND_OUTCOME_ROLLUP_ACCENT,
    },
    oneRecord: {
      badge: ONE_RECORD_BADGE,
      headline: ONE_RECORD_HEADLINE,
      subtitle: ONE_RECORD_SUBTITLE,
      flow: ONE_RECORD_FLOW,
      cardLabel: ONE_RECORD_CARD_LABEL,
      wedge: ONE_RECORD_WEDGE,
      proof: ONE_RECORD_PROOF_NOTE,
    },
    explore: {
      badge: EXPLORE_PLATFORM_BADGE,
      headline: EXPLORE_PLATFORM_HEADLINE,
      accent: EXPLORE_PLATFORM_HEADLINE_ACCENT,
      subtitle: EXPLORE_PLATFORM_SUBTITLE,
      cta: EXPLORE_PLATFORM_CTA_LABEL,
      modules: EXPLORE_PLATFORM_MODULES,
    },
    competitiveTable: {
      badge: COMPETITIVE_TABLE_BADGE,
      headline: COMPETITIVE_TABLE_HEADLINE_LINE,
      accent: COMPETITIVE_TABLE_HEADLINE_ACCENT_LINE,
      subtitle: COMPETITIVE_TABLE_SUBTITLE,
      columns: COMPETITIVE_TABLE_COLUMNS,
      rows: COMPETITIVE_TABLE_ROWS,
      legend: COMPETITIVE_TABLE_LEGEND.map((r) => COMPETITIVE_RATING_META[r].label),
    },
    caseStudy: {
      badge: CASE_STUDY_BADGE,
      headlineLines: CASE_STUDY_HEADLINE_LINES,
      subtitle: CASE_STUDY_SUBTITLE,
      meta: CASE_STUDY_META,
      who: CASE_STUDY_WHO,
      before: CASE_STUDY_PROBLEM,
      after: CASE_STUDY_SOLUTION,
      quote: CASE_STUDY_QUOTE,
      metrics: CASE_STUDY_METRICS,
      ctas: [CASE_STUDY_PRIMARY_CTA, CASE_STUDY_SECONDARY_CTA],
      footnote: CASE_STUDY_FOOTNOTE,
    },
    calculator: {
      badge: CALCULATOR_BADGE,
      headline: CALCULATOR_HEADLINE,
      accent: CALCULATOR_HEADLINE_ACCENT,
      subtitle: CALCULATOR_SUBTITLE,
      bridge: CALCULATOR_BRIDGE,
      inputs: CALCULATOR_INPUT_LABELS,
      resultsLabel: CALCULATOR_RESULTS_LABEL,
      primary: CALCULATOR_PRIMARY_LABEL,
      primarySub: CALCULATOR_PRIMARY_SUB,
      resultLabels: [
        CALCULATOR_MONTHLY_LABEL,
        CALCULATOR_HOURS_LABEL,
        CALCULATOR_CURRENT_LABEL,
        CALCULATOR_PROJECTED_LABEL,
      ],
      trust: CALCULATOR_TRUST_NOTE,
      recoveryRate: AVYRO_RECOVERY_RATE,
      cta: CALCULATOR_CTA_LABEL,
    },
    testimonials: {
      title: TESTIMONIALS_TITLE,
      subtitle: TESTIMONIALS_SUBTITLE,
      items: TESTIMONIALS,
    },
    faq: {
      subtitle: FAQ_SUBTITLE,
      items: FAQ_ITEMS,
      trust: FAQ_TRUST_ITEMS,
    },
    contact: {
      badge: CONTACT_BADGE,
      title: CONTACT_TITLE,
      subtitle: CONTACT_SUBTITLE,
      outcome: CONTACT_OUTCOME_LINE,
      privacy: CONTACT_PRIVACY_NOTE,
      channels: CONTACT_CHANNELS,
      fields: [
        { label: 'Full Name', placeholder: 'Your name' },
        { label: 'Company', placeholder: 'Company name' },
        { label: 'Work Email', placeholder: 'you@company.com' },
        { label: 'Phone', placeholder: 'Phone number' },
        { label: 'Message', placeholder: 'How can we help you?' },
      ],
      submit: 'Submit Request',
    },
    footer: {
      tagline: FOOTER_TAGLINE,
      columns: FOOTER_COLUMNS,
      newsletterTitle: FOOTER_NEWSLETTER_TITLE,
      newsletterSubtitle: FOOTER_NEWSLETTER_SUBTITLE,
      copyright: FOOTER_COPYRIGHT,
      legal: FOOTER_LEGAL_LINKS,
      badges: FOOTER_SECURITY_BADGES,
      social: FOOTER_SOCIAL_LINKS,
    },
  },
  pricing: {
    hero: PRICING_HERO,
    tiers: PRICING_TIERS,
    disclaimer: PRICING_DISCLAIMER,
    allModules: PRICING_ALL_MODULES,
    starterModules: [...PRICING_STARTER_MODULE_SET],
    faqs: PRICING_FAQ,
  },
  useCases: {
    projectManagers: {
      route: '/use-case/project-managers',
      eyebrow: PROJECT_MANAGERS_EYEBROW,
      headline: PROJECT_MANAGERS_HEADLINE,
      subtitle: PROJECT_MANAGERS_SUBTITLE,
      before: BEFORE_CARD,
      after: AFTER_CARD,
      capabilitiesEyebrow: CAPABILITIES_EYEBROW,
      capabilitiesTitle: CAPABILITIES_TITLE,
      capabilities: PROJECT_CAPABILITIES,
      questionsEyebrow: PM_QUESTIONS_EYEBROW,
      questionsTitle: PM_QUESTIONS_TITLE,
      questions: PROJECT_MANAGER_QUESTIONS,
    },
    principalsOwners: {
      route: '/use-case/principals-owners',
      eyebrow: PRINCIPAL_OWNERS_EYEBROW,
      headline: PRINCIPAL_OWNERS_HEADLINE,
      subtitle: PRINCIPAL_OWNERS_SUBTITLE,
      before: PO_BEFORE_CARD,
      after: PO_AFTER_CARD,
      capabilitiesEyebrow: PO_CAPABILITIES_EYEBROW,
      capabilitiesTitle: PO_CAPABILITIES_TITLE,
      capabilities: PRINCIPAL_CAPABILITIES,
      questionsEyebrow: PO_QUESTIONS_EYEBROW,
      questionsTitle: PO_QUESTIONS_TITLE,
      questions: PRINCIPAL_OWNER_QUESTIONS,
    },
    operationsLeaders: {
      route: '/use-case/operations-leaders',
      eyebrow: OPERATIONS_LEADERS_EYEBROW,
      headline: OPERATIONS_LEADERS_HEADLINE,
      subtitle: OPERATIONS_LEADERS_SUBTITLE,
      before: OPS_BEFORE_CARD,
      after: OPS_AFTER_CARD,
      capabilitiesEyebrow: OPS_CAPABILITIES_EYEBROW,
      capabilitiesTitle: OPS_CAPABILITIES_TITLE,
      capabilities: OPERATIONS_CAPABILITIES,
      questionsEyebrow: OPS_QUESTIONS_EYEBROW,
      questionsTitle: OPS_QUESTIONS_TITLE,
      questions: OPERATIONS_LEADER_QUESTIONS,
    },
    accountantsCfos: {
      route: '/use-case/accountants-cfos',
      eyebrow: ACCOUNTANTS_CFOS_EYEBROW,
      headline: ACCOUNTANTS_CFOS_HEADLINE,
      subtitle: ACCOUNTANTS_CFOS_SUBTITLE,
      before: CFO_BEFORE_CARD,
      after: CFO_AFTER_CARD,
      capabilitiesEyebrow: CFO_CAPABILITIES_EYEBROW,
      capabilitiesTitle: CFO_CAPABILITIES_TITLE,
      capabilities: ACCOUNTANT_CAPABILITIES,
      questionsEyebrow: CFO_QUESTIONS_EYEBROW,
      questionsTitle: CFO_QUESTIONS_TITLE,
      questions: ACCOUNTANT_CFO_QUESTIONS,
    },
  },
  resources: {
    hero: RESOURCES_HERO,
    links: RESOURCES_LINKS,
    intros: RESOURCE_TAB_INTROS,
    blog: RESOURCE_BLOG_POSTS,
    caseStudies: RESOURCE_CASE_STUDIES,
    videos: RESOURCE_VIDEOS,
    docs: RESOURCE_DOC_SECTIONS,
    benefits: RESOURCE_BENEFIT_GROUPS,
    competitiveComparisons: COMPETITIVE_COMPARISONS,
  },
  products: {
    routes: PRODUCT_ROUTES,
    labels: PRODUCT_PAGE_LABELS,
    platform: PLATFORM_PAGE,
    integrations: INTEGRATION_PARTNERS,
    modules: PRODUCT_PAGES,
    features: FEATURE_PAGES,
  },
  industries: {
    labels: INDUSTRY_PAGE_LABELS,
    pages: INDUSTRY_PAGES,
  },
})

export default siteContent
