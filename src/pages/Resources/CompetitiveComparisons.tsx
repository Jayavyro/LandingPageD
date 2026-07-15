import { AlertCircle, Check, CheckCircle2, Scale, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import {
  COMPETITIVE_COMPARISONS,
  DEFAULT_COMPETITOR_ID,
  type CompetitorComparison,
} from '../../constants/competitiveComparisons'
import './CompetitiveComparisons.css'

function ScoreBar({ score, maxScore }: { score: number; maxScore: number }) {
  const percent = Math.min(100, (score / maxScore) * 100)

  return (
    <div className="comp-scores__bar-track" aria-hidden="true">
      <div className="comp-scores__bar-fill" style={{ width: `${percent}%` }} />
    </div>
  )
}

function MatrixRowItem({
  row,
  competitorName,
}: {
  row: CompetitorComparison['matrix'][number]
  competitorName: string
}) {
  const winnerLabel =
    row.winner === 'avyro' ? 'Avyro Win' : row.winner === 'tie' ? 'Tie' : `${competitorName} Win`

  return (
    <article className="comp-matrix__row">
      <header className="comp-matrix__row-head">
        <h4 className="comp-matrix__row-title">{row.title}</h4>
        <span className={`comp-matrix__winner comp-matrix__winner--${row.winner}`}>
          {winnerLabel}
        </span>
      </header>

      <div className="comp-matrix__columns">
        <div className="comp-matrix__column comp-matrix__column--avyro">
          <p className="comp-matrix__column-label">{row.avyroLabel}</p>
          <p className="comp-matrix__column-copy">{row.avyroDescription}</p>
        </div>
        <div className="comp-matrix__column comp-matrix__column--competitor">
          <p className="comp-matrix__column-label">{row.competitorLabel}</p>
          <p className="comp-matrix__column-copy">{row.competitorDescription}</p>
        </div>
      </div>
    </article>
  )
}

function CompetitiveComparisons() {
  const [activeId, setActiveId] = useState(DEFAULT_COMPETITOR_ID)
  const comparison =
    COMPETITIVE_COMPARISONS.find((item) => item.id === activeId) ?? COMPETITIVE_COMPARISONS[0]

  return (
    <section className="comp-comparisons" aria-labelledby="comp-comparisons-heading">
      <header className="comp-comparisons__header">
        <div className="comp-comparisons__intro">
          <Scale className="comp-comparisons__icon" strokeWidth={1.75} aria-hidden="true" />
          <h2 id="comp-comparisons-heading" className="comp-comparisons__title">
            Industry Head-to-Head Comparison
          </h2>
        </div>

        <div className="comp-comparisons__selector" role="tablist" aria-label="Select competitor">
          {COMPETITIVE_COMPARISONS.map((item) => {
            const isActive = item.id === activeId

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`comp-comparisons__pill${isActive ? ' comp-comparisons__pill--active' : ''}`}
                onClick={() => setActiveId(item.id)}
              >
                {item.name}
              </button>
            )
          })}
        </div>
      </header>

      <div className="comp-comparisons__board">
        <div className="comp-comparisons__main">
          <div className="comp-highlights">
            <article className="comp-highlights__card">
              <header className="comp-highlights__head">
                <span className="comp-highlights__head-icon comp-highlights__head-icon--positive" aria-hidden="true">
                  <CheckCircle2 strokeWidth={1.75} />
                </span>
                <h3 className="comp-highlights__title">What They Do Well</h3>
              </header>
              <ul className="comp-highlights__list">
                {comparison.strengths.map((item) => (
                  <li key={item} className="comp-highlights__item">
                    <span className="comp-highlights__icon comp-highlights__icon--positive" aria-hidden="true">
                      <Check strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="comp-highlights__card">
              <header className="comp-highlights__head">
                <span className="comp-highlights__head-icon comp-highlights__head-icon--negative" aria-hidden="true">
                  <AlertCircle strokeWidth={1.75} />
                </span>
                <h3 className="comp-highlights__title">Frictions & Failures</h3>
              </header>
              <ul className="comp-highlights__list">
                {comparison.frictions.map((item) => (
                  <li key={item} className="comp-highlights__item">
                    <span className="comp-highlights__icon comp-highlights__icon--negative" aria-hidden="true">
                      <X strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <section className="comp-matrix" aria-labelledby="comp-matrix-heading">
            <header className="comp-matrix__head">
              <h3 id="comp-matrix-heading" className="comp-matrix__title">
                Detailed Matrix Comparison
              </h3>
              <span className="comp-matrix__live">Live Assessment</span>
            </header>

            <div className="comp-matrix__rows">
              {comparison.matrix.map((row) => (
                <MatrixRowItem key={row.id} row={row} competitorName={comparison.name} />
              ))}
            </div>
          </section>
        </div>

        <aside className="comp-comparisons__sidebar">
          <span className="comp-comparisons__category">{comparison.category}</span>

          <h3 className="comp-comparisons__matchup">Avyro vs. {comparison.name}</h3>
          <p className="comp-comparisons__tagline">{comparison.tagline}</p>

          <div className="comp-comparisons__fit">
            <p className="comp-comparisons__fit-block">
              <strong>{comparison.name} is best for:</strong> {comparison.competitorBestFor}
            </p>
            <p className="comp-comparisons__fit-block comp-comparisons__fit-block--avyro">
              <strong>Avyro is best for:</strong> {comparison.avyroBestFor}
            </p>
          </div>

          <div className="comp-scores">
            <h4 className="comp-scores__title">{comparison.name} — Platform Assessment</h4>
            <p className="comp-scores__subtitle">How this competitor rates across key AEC workflows</p>
            <ul className="comp-scores__list">
              {comparison.scores.map((item) => (
                <li key={item.label} className="comp-scores__item">
                  <div className="comp-scores__meta">
                    <span className="comp-scores__label">{item.label}</span>
                    <span className="comp-scores__value">
                      {item.score.toFixed(1)} / {item.maxScore.toFixed(1)}
                    </span>
                  </div>
                  <ScoreBar score={item.score} maxScore={item.maxScore} />
                </li>
              ))}
            </ul>
          </div>

          <div className="comp-verdict">
            <div className="comp-verdict__head">
              <Sparkles className="comp-verdict__icon" strokeWidth={1.75} aria-hidden="true" />
              <p className="comp-verdict__eyebrow">Executive Verdict</p>
            </div>
            <p className="comp-verdict__copy">{comparison.executiveVerdict}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default CompetitiveComparisons
