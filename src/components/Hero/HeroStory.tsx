import { useState } from 'react'
import './HeroStory.css'

type DashTab = 'resourcing' | 'timesheets' | 'projects'

interface DashRow {
  label: string
  value: string
  width: number
  tone: 'ok' | 'plain'
}

interface DashView {
  rows: DashRow[]
  footerLabel: string
  footerValue: string
}

const TABS: { id: DashTab; label: string }[] = [
  { id: 'resourcing', label: 'Resourcing' },
  { id: 'timesheets', label: 'Timesheets' },
  { id: 'projects', label: 'Projects' },
]

const AVATARS = [
  {
    id: 'jm',
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 'sk',
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 'rp',
    src: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: 'av',
    src: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
] as const

const VIEWS: Record<DashTab, DashView> = {
  projects: {
    rows: [
      { label: 'Riverfront Tower — milestone: CDs', value: 'On track', width: 58, tone: 'ok' },
      { label: 'Riverfront Tower — budget used', value: '58%', width: 58, tone: 'plain' },
      { label: 'Studio utilization', value: '72%', width: 72, tone: 'plain' },
    ],
    footerLabel: 'Team open to staff, right now',
    footerValue: '6',
  },
  resourcing: {
    rows: [
      { label: 'SD phase — capacity this week', value: 'On track', width: 64, tone: 'ok' },
      { label: 'DD staffing — seats filled', value: '81%', width: 81, tone: 'plain' },
      { label: 'Firm-wide utilization', value: '72%', width: 72, tone: 'plain' },
    ],
    footerLabel: 'People available to assign',
    footerValue: '6',
  },
  timesheets: {
    rows: [
      { label: 'Hours mapped this week', value: 'On track', width: 68, tone: 'ok' },
      { label: 'Pending approvals', value: '42%', width: 42, tone: 'plain' },
      { label: 'Billable capture rate', value: '89%', width: 89, tone: 'plain' },
    ],
    footerLabel: 'Sheets ready for review',
    footerValue: '6',
  },
}

function HeroStory() {
  const [activeTab, setActiveTab] = useState<DashTab>('projects')
  const view = VIEWS[activeTab]

  return (
    <aside className="dash-card" aria-label="Studio week snapshot">
      <div className="dash-head">
        <span className="dash-head__label">Studio · This Week</span>
        <div className="dash-live">
          <span className="dash-live__pulse" aria-hidden="true" />
          Live
        </div>
      </div>

      <div className="dash-tabs" role="tablist" aria-label="Studio views">
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`dash-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls="dash-panel"
              tabIndex={isActive ? 0 : -1}
              className={`dash-tab${isActive ? ' dash-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(event) => {
                if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
                event.preventDefault()
                const index = TABS.findIndex((item) => item.id === activeTab)
                const delta = event.key === 'ArrowRight' ? 1 : -1
                const next = TABS[(index + delta + TABS.length) % TABS.length]
                setActiveTab(next.id)
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="dash-avatars" aria-hidden="true">
        {AVATARS.map((avatar) => (
          <span key={avatar.id} className="dash-avatar">
            <img
              src={avatar.src}
              alt=""
              width={32}
              height={32}
              loading="lazy"
              decoding="async"
            />
          </span>
        ))}
        <span className="dash-avatar dash-avatar--more">+9</span>
      </div>

      <div
        className="dash-rows"
        id="dash-panel"
        role="tabpanel"
        aria-labelledby={`dash-tab-${activeTab}`}
        key={activeTab}
      >
        {view.rows.map((row) => (
          <div className="dash-row" key={row.label}>
            <div className="dash-row-label">
              <span className="dash-row-label__text">{row.label}</span>
              <span
                className={`dash-row-label__value${row.tone === 'ok' ? ' dash-row-label__value--ok' : ''}`}
              >
                {row.value}
              </span>
            </div>
            <div
              className="dash-bar"
              role="progressbar"
              aria-valuenow={row.width}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={row.label}
            >
              <div className="dash-bar-fill" style={{ width: `${row.width}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="dash-foot">
        <span className="dash-foot__lbl">{view.footerLabel}</span>
        <span className="dash-foot__num">{view.footerValue}</span>
      </div>
    </aside>
  )
}

export default HeroStory
