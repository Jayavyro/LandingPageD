import { Link, useParams } from 'react-router-dom'
import { RESOURCES_LINKS } from '../../constants/resourcesMenu'
import { resolveResourceTabId } from '../../constants/resourcesPage'
import './ResourcesTabs.css'

function ResourcesTabs() {
  const { tabId } = useParams()
  const activeTab = resolveResourceTabId(tabId) ?? 'competitive-comparisons'

  return (
    <nav className="resources-tabs" aria-label="Resource categories">
      <ul className="resources-tabs__list">
        {RESOURCES_LINKS.map((link) => {
          const isActive = link.id === activeTab

          return (
            <li key={link.id}>
              <Link
                to={link.href}
                className={`resources-tabs__pill${isActive ? ' resources-tabs__pill--active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ResourcesTabs
