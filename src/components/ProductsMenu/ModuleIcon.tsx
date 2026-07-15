import type { ReactElement } from 'react'
import type { ModuleIconName } from '../../constants/navMenu'

const ICONS: Record<ModuleIconName, ReactElement> = {
  crm: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 12 6 8.5l2.5 2L13.5 5.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  ),
  billing: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 2.5h10v11l-2.5-1.5L8 13.5 5.5 12 3 13.5V2.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M6 6h4M6 8.5h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  asset: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 5.5 8 2.5l5 3v5.5l-5 3-5-3V5.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M8 8.5v5M8 8.5 3 5.5M8 8.5l5-3" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  ),
  hrms: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2.5" y="3" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5.5 6h5M5.5 8.5h3.5M5.5 11h2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  resource: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="5.5" cy="5" r="1.75" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="10.5" cy="5" r="1.75" stroke="currentColor" strokeWidth="1.25" />
      <path d="M2 12.5c0-1.8 1.6-3 3.5-3s3.5 1.2 3.5 3M8 12.5c0-1.8 1.6-3 3.5-3s3.5 1.2 3.5 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  project: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 4.5h10v8.5H3V4.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M6 3v3M10 3v3M3 7.5h10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  activity: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 11.5 6 8l2.5 2L13.5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 5H13.5V8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  timesheet: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M8 5v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  approval: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 2.5h8v11H4V2.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M6.5 8.5 7.5 9.5 10 7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ai: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2.5v2M8 11.5v2M2.5 8h2M11.5 8h2M4.4 4.4l1.4 1.4M10.2 10.2l1.4 1.4M4.4 11.6l1.4-1.4M10.2 5.8l1.4-1.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  ),
  analytics: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 13V7M6.5 13V4M10 13V9M13.5 13V2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  integration: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="4" cy="8" r="2" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.25" />
      <path d="M6 7.2 10 5M6 8.8l4 2.2" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  ),
  bulk: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 10.5V5.5l4.5-2.5 4.5 2.5v5" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M5.5 7.5h5M5.5 9h3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M8 3v3.5M6.5 5.25 8 3l1.5 2.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  workforce: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="5.5" cy="5" r="1.75" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="10.5" cy="5" r="1.75" stroke="currentColor" strokeWidth="1.25" />
      <path d="M2 12.5c0-1.8 1.6-3 3.5-3s3.5 1.2 3.5 3M8 12.5c0-1.8 1.6-3 3.5-3s3.5 1.2 3.5 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  talent: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="6.5" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.25" />
      <path d="M2.5 13c0-2.2 1.8-3.5 4-3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M11 8.5v4M9 10.5h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  recruitment: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5" r="2.25" stroke="currentColor" strokeWidth="1.25" />
      <path d="M3.5 13.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M12 6.5h2v2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
}

interface ModuleIconProps {
  name: ModuleIconName
}

function ModuleIcon({ name }: ModuleIconProps) {
  return ICONS[name]
}

export default ModuleIcon
