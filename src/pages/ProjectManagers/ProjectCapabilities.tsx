import {
  CAPABILITIES_EYEBROW,
  CAPABILITIES_TITLE,
  CAPABILITIES_VISUAL,
  PROJECT_CAPABILITIES,
} from '../../constants/projectManagers'
import type { ProjectCapability, CapabilitiesVisual } from '../../constants/projectManagers'
import './ProjectCapabilities.css'

interface ProjectCapabilitiesProps {
  eyebrow?: string
  title?: string
  visual?: CapabilitiesVisual
  capabilities?: readonly ProjectCapability[]
}

function ProjectCapabilities({
  eyebrow = CAPABILITIES_EYEBROW,
  title = CAPABILITIES_TITLE,
  visual = CAPABILITIES_VISUAL,
  capabilities = PROJECT_CAPABILITIES,
}: ProjectCapabilitiesProps) {
  return (
    <section className="pm-capabilities" aria-labelledby="pm-capabilities-heading">
      <div className="pm-capabilities__ambient" aria-hidden="true">
        <div className="pm-capabilities__grid-pattern" />
        <div className="pm-capabilities__glow pm-capabilities__glow--left" />
        <div className="pm-capabilities__glow pm-capabilities__glow--right" />
      </div>

      <div className="pm-capabilities__shell">
        <header className="pm-capabilities__intro">
          <p className="pm-capabilities__eyebrow">{eyebrow}</p>
          <h2 id="pm-capabilities-heading" className="pm-capabilities__title">
            {title}
          </h2>
        </header>

        <div className="pm-capabilities__layout">
          <figure className="pm-capabilities__visual">
            <img src={visual.src} alt={visual.alt} loading="lazy" />
          </figure>

          <ul className="pm-capabilities__grid">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <li key={title} className="pm-capabilities__card">
                <span className="pm-capabilities__icon" aria-hidden="true">
                  <Icon strokeWidth={1.75} />
                </span>
                <h3 className="pm-capabilities__card-title">{title}</h3>
                <p className="pm-capabilities__card-copy">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProjectCapabilities
