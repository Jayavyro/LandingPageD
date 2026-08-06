import type { LucideIcon } from 'lucide-react'
import { CheckCircle2, Circle, MinusCircle } from 'lucide-react'

export const COMPETITIVE_TABLE_BADGE = 'Resources'

export const COMPETITIVE_TABLE_HEADLINE_LINE = 'How Avyro compares'

export const COMPETITIVE_TABLE_HEADLINE_ACCENT_LINE = 'Capability by capability.'

export const COMPETITIVE_TABLE_SUBTITLE =
  'Competitor rows reflect our understanding of each product as of this writing and should be verified against current vendor documentation before publishing externally.'

export type CompetitiveRating = 'strong' | 'partial' | 'weak'

export interface CompetitiveRatingMeta {
  label: string
  icon: LucideIcon
  toneClass: string
}

export const COMPETITIVE_RATING_META: Record<CompetitiveRating, CompetitiveRatingMeta> = {
  strong: {
    label: 'Yes',
    icon: CheckCircle2,
    toneClass: 'competitive-table__rating--strong',
  },
  partial: {
    label: 'Partial',
    icon: MinusCircle,
    toneClass: 'competitive-table__rating--partial',
  },
  weak: {
    label: 'Limited / no',
    icon: Circle,
    toneClass: 'competitive-table__rating--weak',
  },
}

export const COMPETITIVE_TABLE_LEGEND: CompetitiveRating[] = ['strong', 'partial', 'weak']

export interface CompetitiveColumn {
  id: string
  label: string
}

/** Capability columns matching the HTML comparison table. */
export const COMPETITIVE_TABLE_COLUMNS: CompetitiveColumn[] = [
  { id: 'singleRecord', label: 'Lead-to-invoice record' },
  { id: 'resourceAllocation', label: 'Native capacity view' },
  { id: 'smartTimesheets', label: 'Plan-linked timesheets' },
  { id: 'aiaBilling', label: 'AIA progress billing' },
  { id: 'aecBuilt', label: 'Built for AEC' },
  { id: 'alongsideStack', label: 'Works alongside stack' },
  { id: 'liveInWeeks', label: 'Live in weeks' },
  { id: 'twoEntryPoints', label: 'Drive → X path' },
]

export interface CompetitiveToolRow {
  id: string
  name: string
  ratings: Record<string, CompetitiveRating>
  isAvyro?: boolean
}

export const COMPETITIVE_TABLE_ROWS: CompetitiveToolRow[] = [
  {
    id: 'avyro',
    name: 'Avyro',
    isAvyro: true,
    ratings: {
      singleRecord: 'strong',
      resourceAllocation: 'strong',
      smartTimesheets: 'strong',
      aiaBilling: 'strong',
      aecBuilt: 'strong',
      alongsideStack: 'strong',
      liveInWeeks: 'strong',
      twoEntryPoints: 'strong',
    },
  },
  {
    id: 'deltek-vantagepoint',
    name: 'Deltek Vantagepoint',
    ratings: {
      singleRecord: 'partial',
      resourceAllocation: 'strong',
      smartTimesheets: 'strong',
      aiaBilling: 'strong',
      aecBuilt: 'strong',
      alongsideStack: 'weak',
      liveInWeeks: 'weak',
      twoEntryPoints: 'weak',
    },
  },
  {
    id: 'monograph',
    name: 'Monograph',
    ratings: {
      singleRecord: 'partial',
      resourceAllocation: 'strong',
      smartTimesheets: 'strong',
      aiaBilling: 'partial',
      aecBuilt: 'strong',
      alongsideStack: 'strong',
      liveInWeeks: 'strong',
      twoEntryPoints: 'weak',
    },
  },
  {
    id: 'bqe-core',
    name: 'BQE Core',
    ratings: {
      singleRecord: 'partial',
      resourceAllocation: 'weak',
      smartTimesheets: 'strong',
      aiaBilling: 'strong',
      aecBuilt: 'partial',
      alongsideStack: 'strong',
      liveInWeeks: 'partial',
      twoEntryPoints: 'weak',
    },
  },
]
