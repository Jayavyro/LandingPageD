import { Link } from 'react-router-dom'
import { FEATURED_OFFERING } from '../../constants/navMenu'
import './ProductsFeatured.css'

function ProductsFeatured() {
  return (
    <aside className="projects-featured" aria-label="Smart Timesheets feature">
      <div className="projects-featured__promo">
        <p className="projects-featured__tag">{FEATURED_OFFERING.tag}</p>
        <h4 className="projects-featured__title">{FEATURED_OFFERING.title}</h4>
        <p className="projects-featured__description">
          {FEATURED_OFFERING.description}
        </p>

        <div className="projects-featured__viz" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <Link to={FEATURED_OFFERING.ctaHref} className="projects-featured__cta">
          {FEATURED_OFFERING.ctaLabel}
        </Link>
      </div>
    </aside>
  )
}

export default ProductsFeatured
