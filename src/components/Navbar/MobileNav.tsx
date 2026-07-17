import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_LINKS, PROJECTS_MENU, WHY_AVYRO_LINK, BOOK_DEMO_HREF } from '../../constants/navMenu'
import { RESOURCES_LINKS } from '../../constants/resourcesMenu'
import { USE_CASE_MENU } from '../../constants/useCaseMenu'
import './MobileNav.css'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  if (!isOpen) {
    return null
  }

  const toggleSection = (section: string) => {
    setExpandedSection((current) => (current === section ? null : section))
  }

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <Link to={WHY_AVYRO_LINK.href} className="mobile-nav__link" onClick={onClose}>
        {WHY_AVYRO_LINK.label}
      </Link>

      <div className="mobile-nav__section">
        <button
          type="button"
          className="mobile-nav__section-toggle"
          aria-expanded={expandedSection === 'products'}
          onClick={() => toggleSection('products')}
        >
          Products
        </button>
        {expandedSection === 'products' && (
          <div className="mobile-nav__section-panel">
            {PROJECTS_MENU.map((section) => (
              <div key={section.title} className="mobile-nav__group">
                <p className="mobile-nav__group-label">{section.title}</p>
                <ul className="mobile-nav__sublist">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.href ?? '/'}
                        className="mobile-nav__sublink"
                        onClick={onClose}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mobile-nav__section">
        <button
          type="button"
          className="mobile-nav__section-toggle"
          aria-expanded={expandedSection === 'use-case'}
          onClick={() => toggleSection('use-case')}
        >
          Use Case
        </button>
        {expandedSection === 'use-case' && (
          <div className="mobile-nav__section-panel">
            {USE_CASE_MENU.map((section) => (
              <div key={section.title} className="mobile-nav__group">
                <p className="mobile-nav__group-label">{section.title}</p>
                <ul className="mobile-nav__sublist">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link to={item.href} className="mobile-nav__sublink" onClick={onClose}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mobile-nav__section">
        <button
          type="button"
          className="mobile-nav__section-toggle"
          aria-expanded={expandedSection === 'resources'}
          onClick={() => toggleSection('resources')}
        >
          Resources
        </button>
        {expandedSection === 'resources' && (
          <div className="mobile-nav__section-panel">
            <ul className="mobile-nav__sublist">
              {RESOURCES_LINKS.map((item) => (
                <li key={item.id}>
                  <Link to={item.href} className="mobile-nav__sublink" onClick={onClose}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {NAV_LINKS.map((link) => {
        const isInternalRoute = link.href.startsWith('/')

        if (isInternalRoute) {
          return (
            <Link key={link.label} to={link.href} className="mobile-nav__link" onClick={onClose}>
              {link.label}
            </Link>
          )
        }

        return (
          <a key={link.label} href={link.href} className="mobile-nav__link" onClick={onClose}>
            {link.label}
          </a>
        )
      })}

      <Link to={BOOK_DEMO_HREF} className="mobile-nav__cta" onClick={onClose}>
        Book a demo
      </Link>
    </nav>
  )
}

export default MobileNav
