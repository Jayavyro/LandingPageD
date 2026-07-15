import { Link } from 'react-router-dom'
import { SCHEDULER_OFFERING } from '../../constants/navMenu'
import './ProductsScheduler.css'

function ProductsScheduler() {
  return (
    <aside className="projects-scheduler" aria-label="Resource Scheduler feature">
      <div className="projects-scheduler__promo">
        <p className="projects-scheduler__tag">{SCHEDULER_OFFERING.tag}</p>
        <h4 className="projects-scheduler__title">{SCHEDULER_OFFERING.title}</h4>
        <p className="projects-scheduler__description">
          {SCHEDULER_OFFERING.description}
        </p>

        <div className="projects-scheduler__gantt" aria-hidden="true">
          <span className="projects-scheduler__row">
            <span className="projects-scheduler__bar projects-scheduler__bar--one" />
          </span>
          <span className="projects-scheduler__row">
            <span className="projects-scheduler__bar projects-scheduler__bar--two" />
          </span>
          <span className="projects-scheduler__row">
            <span className="projects-scheduler__bar projects-scheduler__bar--three" />
          </span>
          <span className="projects-scheduler__row">
            <span className="projects-scheduler__bar projects-scheduler__bar--four" />
          </span>
        </div>

        <Link to={SCHEDULER_OFFERING.ctaHref} className="projects-scheduler__cta">
          {SCHEDULER_OFFERING.ctaLabel}
        </Link>
      </div>
    </aside>
  )
}

export default ProductsScheduler
