import { RESOURCES_LINKS } from '../../constants/resourcesMenu'
import NavDropdownItem from '../NavbarMenu/NavDropdownItem'
import '../NavbarMenu/navDropdown.css'
import ResourceIcon from './ResourceIcon'
import './ResourcesMenu.css'

function ResourcesMenu() {
  return (
    <div className="nav-dropdown resources-menu" role="region" aria-label="Resources menu">
      <div className="nav-dropdown__card">
        <div className="resources-menu__panel">
          <p className="nav-dropdown__eyebrow">Resources</p>

          <ul className="resources-menu__grid">
            {RESOURCES_LINKS.map((link) => (
              <li key={link.label} className="resources-menu__item">
                <NavDropdownItem
                  title={link.label}
                  description={link.description}
                  href={link.href}
                  icon={<ResourceIcon name={link.icon} />}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResourcesMenu
