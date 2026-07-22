import { motion, useReducedMotion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import {
  COMPETITIVE_RATING_META,
  COMPETITIVE_TABLE_BADGE,
  COMPETITIVE_TABLE_COLUMNS,
  COMPETITIVE_TABLE_HEADLINE_ACCENT_LINE,
  COMPETITIVE_TABLE_HEADLINE_LINE,
  COMPETITIVE_TABLE_LEGEND,
  COMPETITIVE_TABLE_ROWS,
  COMPETITIVE_TABLE_SUBTITLE,
} from '../../constants/competitiveTable'
import './CompetitiveTable.css'

const EASE = [0.22, 1, 0.36, 1] as const

function CompetitiveTable() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.4, delay, ease: EASE },
        }

  return (
    <section
      id="competitive-table"
      className="competitive-table"
      aria-labelledby="competitive-table-heading"
    >
      <div className="competitive-table__container">
        <header className="competitive-table__intro">
          <motion.span className="competitive-table__badge" {...fadeUp(0)}>
            <Trophy size={14} strokeWidth={2} aria-hidden="true" />
            {COMPETITIVE_TABLE_BADGE}
          </motion.span>

          <motion.h2
            id="competitive-table-heading"
            className="competitive-table__title"
            {...fadeUp(0.05)}
          >
            <span className="competitive-table__title-line">
              {COMPETITIVE_TABLE_HEADLINE_LINE}
            </span>
            <span className="competitive-table__title-line competitive-table__title-accent">
              {COMPETITIVE_TABLE_HEADLINE_ACCENT_LINE}
            </span>
          </motion.h2>

          <motion.p className="competitive-table__subtitle" {...fadeUp(0.1)}>
            {COMPETITIVE_TABLE_SUBTITLE}
          </motion.p>
        </header>

        <motion.div className="competitive-table__wrap" {...fadeUp(0.15)}>
          <div className="competitive-table__scroll">
            <table className="competitive-table__table">
              <caption className="competitive-table__caption">
                Feature coverage comparison across AEC CRM, resourcing, timesheet, and billing
                tools
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="competitive-table__th competitive-table__th--tool">
                    Tool
                  </th>
                  {COMPETITIVE_TABLE_COLUMNS.map((column) => (
                    <th key={column.id} scope="col" className="competitive-table__th">
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE_TABLE_ROWS.map((row) => (
                  <tr
                    key={row.id}
                    className={
                      row.isAvyro
                        ? 'competitive-table__row competitive-table__row--avyro'
                        : 'competitive-table__row'
                    }
                  >
                    <th scope="row" className="competitive-table__row-name">
                      {row.name}
                    </th>
                    {COMPETITIVE_TABLE_COLUMNS.map((column) => {
                      const rating = row.ratings[column.id]
                      const meta = COMPETITIVE_RATING_META[rating]
                      const RatingIcon = meta.icon

                      return (
                        <td key={column.id} className="competitive-table__td">
                          <span
                            className={`competitive-table__rating ${meta.toneClass}`}
                            aria-label={`${row.name} — ${column.label}: ${meta.label}`}
                          >
                            <RatingIcon size={18} strokeWidth={2} aria-hidden="true" />
                          </span>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.ul className="competitive-table__legend" {...fadeUp(0.2)}>
          {COMPETITIVE_TABLE_LEGEND.map((rating) => {
            const meta = COMPETITIVE_RATING_META[rating]
            const LegendIcon = meta.icon

            return (
              <li key={rating} className="competitive-table__legend-item">
                <span className={`competitive-table__rating ${meta.toneClass}`} aria-hidden="true">
                  <LegendIcon size={16} strokeWidth={2} />
                </span>
                {meta.label}
              </li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}

export default CompetitiveTable
