import { ArrowRight, Check, X } from 'lucide-react'
import { AFTER_CARD, BEFORE_CARD } from '../../constants/projectManagers'
import type { AfterCard, BeforeCard } from '../../constants/projectManagers'
import './BeforeAfterComparison.css'

interface BeforeAfterComparisonProps {
  beforeCard?: BeforeCard
  afterCard?: AfterCard
}

function BeforeAfterComparison({
  beforeCard = BEFORE_CARD,
  afterCard = AFTER_CARD,
}: BeforeAfterComparisonProps) {
  return (
    <div className="before-after">
      <article className="before-after__card before-after__card--before">
        <header className="before-after__card-head">
          <span className="before-after__status before-after__status--before" aria-hidden="true">
            <X strokeWidth={2.5} />
          </span>
          <div>
            <h2 className="before-after__card-title">{beforeCard.title}</h2>
            <p className="before-after__card-subtitle">{beforeCard.subtitle}</p>
          </div>
        </header>

        <figure className="before-after__visual before-after__visual--before">
          {beforeCard.image ? (
            <img src={beforeCard.image} alt={beforeCard.imageAlt} loading="lazy" />
          ) : (
            <div className="before-after__placeholder" role="img" aria-label={beforeCard.imageAlt}>
              <span className="before-after__placeholder-label">Before image</span>
              <span className="before-after__placeholder-hint">Image coming soon</span>
            </div>
          )}
        </figure>

        <ul className="before-after__points">
          {beforeCard.points.map((point) => (
            <li key={point} className="before-after__point before-after__point--negative">
              <span className="before-after__point-icon" aria-hidden="true">
                <X strokeWidth={2.5} />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </article>

      <div className="before-after__arrow" aria-hidden="true">
        <span className="before-after__arrow-btn">
          <ArrowRight strokeWidth={2.25} />
        </span>
      </div>

      <article className="before-after__card before-after__card--after">
        <header className="before-after__card-head before-after__card-head--after">
          <span className="before-after__status before-after__status--after" aria-hidden="true">
            <Check strokeWidth={2.5} />
          </span>
          <div>
            <h2 className="before-after__card-title">{afterCard.title}</h2>
            <p className="before-after__card-subtitle">{afterCard.subtitle}</p>
          </div>
        </header>

        <figure className="before-after__visual before-after__visual--after">
          {afterCard.image ? (
            <img src={afterCard.image} alt={afterCard.imageAlt} loading="lazy" />
          ) : (
            <div
              className="before-after__placeholder before-after__placeholder--after"
              role="img"
              aria-label={afterCard.imageAlt}
            >
              <span className="before-after__placeholder-label">After image</span>
              <span className="before-after__placeholder-hint">Image coming soon</span>
            </div>
          )}
        </figure>
      </article>
    </div>
  )
}

export default BeforeAfterComparison
