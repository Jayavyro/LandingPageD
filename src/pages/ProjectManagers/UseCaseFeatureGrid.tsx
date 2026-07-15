import { PROJECT_MANAGER_FEATURES } from '../../constants/projectManagers'
import './UseCaseFeatureGrid.css'

function UseCaseFeatureGrid() {
  return (
    <ul className="use-case-features">
      {PROJECT_MANAGER_FEATURES.map(({ icon: Icon, title, description }) => (
        <li key={title} className="use-case-features__item">
          <span className="use-case-features__icon" aria-hidden="true">
            <Icon strokeWidth={1.75} />
          </span>
          <div className="use-case-features__copy">
            <h3 className="use-case-features__title">{title}</h3>
            <p className="use-case-features__description">{description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default UseCaseFeatureGrid
