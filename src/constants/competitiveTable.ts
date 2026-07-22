import type { LucideIcon } from 'lucide-react'
import { CheckCircle2, Circle, MinusCircle } from 'lucide-react'

export const COMPETITIVE_TABLE_BADGE = 'Why Avyro'

export const COMPETITIVE_TABLE_HEADLINE_LINE = 'Every point tool is strong somewhere.'

export const COMPETITIVE_TABLE_HEADLINE_ACCENT_LINE = 'Avyro is strong everywhere.'

export const COMPETITIVE_TABLE_SUBTITLE =
  'Cosential wins at CRM. Deltek wins at resourcing. BQE CORE wins at timesheets. None of them do all three — and none of them bill from the same record. Avyro does.'

export type CompetitiveRating = 'strong' | 'partial' | 'weak'

export interface CompetitiveRatingMeta {
  label: string
  icon: LucideIcon
  toneClass: string
}

export const COMPETITIVE_RATING_META: Record<CompetitiveRating, CompetitiveRatingMeta> = {
  strong: {
    label: 'Strong',
    icon: CheckCircle2,
    toneClass: 'competitive-table__rating--strong',
  },
  partial: {
    label: 'Partial',
    icon: MinusCircle,
    toneClass: 'competitive-table__rating--partial',
  },
  weak: {
    label: 'Weak / none',
    icon: Circle,
    toneClass: 'competitive-table__rating--weak',
  },
}

export const COMPETITIVE_TABLE_LEGEND: CompetitiveRating[] = ['strong', 'partial', 'weak']

export interface CompetitiveColumn {
  id: string
  label: string
}

export const COMPETITIVE_TABLE_COLUMNS: CompetitiveColumn[] = [
  { id: 'crm', label: 'CRM' },
  { id: 'resourceAllocation', label: 'Resource Allocation' },
  { id: 'timesheets', label: 'Timesheets' },
  { id: 'billing', label: 'Billing' },
  { id: 'aiNative', label: 'AI-native' },
  { id: 'allInOne', label: 'All-in-one' },
]

export interface CompetitiveToolRow {
  id: string
  name: string
  ratings: Record<string, CompetitiveRating>
  isAvyro?: boolean
}

export const COMPETITIVE_TABLE_ROWS: CompetitiveToolRow[] = [
  {
    id: 'cosential',
    name: 'Cosential',
    ratings: {
      crm: 'strong',
      resourceAllocation: 'weak',
      timesheets: 'weak',
      billing: 'weak',
      aiNative: 'partial',
      allInOne: 'weak',
    },
  },
  {
    id: 'deltek',
    name: 'Deltek',
    ratings: {
      crm: 'weak',
      resourceAllocation: 'strong',
      timesheets: 'partial',
      billing: 'partial',
      aiNative: 'weak',
      allInOne: 'partial',
    },
  },
  {
    id: 'bqe-core',
    name: 'BQE CORE',
    ratings: {
      crm: 'weak',
      resourceAllocation: 'weak',
      timesheets: 'strong',
      billing: 'partial',
      aiNative: 'weak',
      allInOne: 'partial',
    },
  },
  {
    id: 'unanet',
    name: 'Unanet',
    ratings: {
      crm: 'weak',
      resourceAllocation: 'strong',
      timesheets: 'partial',
      billing: 'partial',
      aiNative: 'weak',
      allInOne: 'partial',
    },
  },
  {
    id: 'monograph',
    name: 'Monograph',
    ratings: {
      crm: 'weak',
      resourceAllocation: 'partial',
      timesheets: 'partial',
      billing: 'weak',
      aiNative: 'partial',
      allInOne: 'weak',
    },
  },
  {
    id: 'avyro',
    name: 'Avyro',
    isAvyro: true,
    ratings: {
      crm: 'strong',
      resourceAllocation: 'strong',
      timesheets: 'strong',
      billing: 'strong',
      aiNative: 'strong',
      allInOne: 'strong',
    },
  },
]
