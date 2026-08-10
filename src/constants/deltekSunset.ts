export interface DeltekSunsetCard {
  id: string
  title: string
  body: string
}

export const DELTEK_SUNSET_BADGE = 'Blog'

export const DELTEK_SUNSET_HEADLINE = 'The Deltek Vision sunset, explained plainly'

export const DELTEK_SUNSET_SUBTITLE =
  "If your firm runs on Deltek Vision, here's what's actually changing, when, and what it means for how you plan the next 12 months."

export const DELTEK_SUNSET_CARDS: DeltekSunsetCard[] = [
  {
    id: 'jan-2026',
    title: 'January 2026 — Vision 7.6 receives its final year-end update',
    body: "After this, Deltek shifts its full engineering focus to Vantagepoint. Vision continues to run, but stops evolving.",
  },
  {
    id: 'q1-2027',
    title: "Q1 2027 — Vision's cloud-hosted environments begin winding down",
    body: "Firms on hosted Vision will need a plan before this date, whether that's migrating to Vantagepoint or reassessing the stack entirely.",
  },
  {
    id: 'two-problems',
    title: 'These are two separate problems',
    body: 'Migrating your ERP and closing your front-office gap are different projects. Many firms run Avyro X alongside Deltek rather than instead of it.',
  },
]
