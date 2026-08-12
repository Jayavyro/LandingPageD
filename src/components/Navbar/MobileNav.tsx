import { useState } from 'react'
import {
  NAV_LINKS,
  PRODUCT_LINES_MENU,
  WHY_AVYRO_LINK,
  BOOK_DEMO_HREF,
} from '../../constants/navMenu'
import { FEATURES_MENU_ITEMS } from '../../constants/featuresMenu'
import LandingHashLink from '../LandingHashLink/LandingHashLink'
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
      <LandingHashLink to={WHY_AVYRO_LINK.href} className="mobile-nav__link" onClick={onClose}>
        {WHY_AVYRO_LINK.label}
      </LandingHashLink>

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
            <ul className="mobile-nav__sublist">
              {PRODUCT_LINES_MENU.map((item) => (
                <li key={item.title}>
                  <LandingHashLink
                    to={item.href ?? '/'}
                    className="mobile-nav__sublink"
                    onClick={onClose}
                  >
                    <span className="mobile-nav__sublink-title">
                      {item.badge ?? item.title}
                    </span>
                    {item.badge ? (
                      <span className="mobile-nav__sublink-desc">{item.title}</span>
                    ) : null}
                  </LandingHashLink>
                </li>
              ))}
            </ul>
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
          Features
        </button>
        {expandedSection === 'use-case' && (
          <div className="mobile-nav__section-panel">
            <ul className="mobile-nav__sublist">
              {FEATURES_MENU_ITEMS.map((item) => (
                <li key={item.title}>
                  <LandingHashLink
                    to={item.href}
                    className="mobile-nav__sublink"
                    onClick={onClose}
                  >
                    <span className="mobile-nav__sublink-title">{item.title}</span>
                    <span className="mobile-nav__sublink-desc">{item.description}</span>
                  </LandingHashLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {NAV_LINKS.map((link) => (
        <LandingHashLink
          key={link.label}
          to={link.href}
          className="mobile-nav__link"
          onClick={onClose}
        >
          {link.label}
        </LandingHashLink>
      ))}

      <LandingHashLink to={BOOK_DEMO_HREF} className="mobile-nav__cta" onClick={onClose}>
        Book a demo
      </LandingHashLink>
    </nav>
  )
}

export default MobileNav
