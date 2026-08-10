import {
  FEATURES_MENU_CTA,
  FEATURES_MENU_SECTIONS,
} from '../../constants/featuresMenu'
import LandingHashLink from '../LandingHashLink/LandingHashLink'
import NavDropdownItem from '../NavbarMenu/NavDropdownItem'
import '../NavbarMenu/navDropdown.css'
import ModuleIcon from '../ProductsMenu/ModuleIcon'
import './FeaturesMenu.css'

interface FeaturesMenuProps {
  onNavigate?: () => void
}

function FeaturesMenu({ onNavigate }: FeaturesMenuProps) {
  const sections = FEATURES_MENU_SECTIONS.filter(
    (section) => section.items.length > 0,
  )

  return (
    <div
      className="nav-dropdown features-menu"
      role="region"
      aria-label="Features menu"
    >
      <div className="nav-dropdown__card features-menu__card">
        <div className="features-menu__layout">
          <div className="features-menu__main">
            {sections.map((section) => (
              <section
                key={section.title}
                className="features-menu__section"
                aria-label={section.title}
              >
                <p className="nav-dropdown__eyebrow">{section.title}</p>

                <ul className="features-menu__grid">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <NavDropdownItem
                        title={item.title}
                        description={item.description}
                        icon={<ModuleIcon name={item.icon} />}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <aside className="features-menu__promo" aria-label="Book a demo">
            <p className="features-menu__promo-headline">
              {FEATURES_MENU_CTA.headlineBefore}
              <span className="features-menu__promo-accent">
                {FEATURES_MENU_CTA.headlineAccent}
              </span>
              {FEATURES_MENU_CTA.headlineAfter}
            </p>

            <LandingHashLink
              to={FEATURES_MENU_CTA.ctaHref}
              className="features-menu__promo-cta"
              onClick={onNavigate}
            >
              {FEATURES_MENU_CTA.ctaLabel}
              <span aria-hidden="true">→</span>
            </LandingHashLink>

            <p className="features-menu__promo-note">{FEATURES_MENU_CTA.footnote}</p>

            <div className="features-menu__viz" aria-hidden="true">
              <div className="features-menu__viz-card features-menu__viz-card--chart">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="features-menu__viz-card features-menu__viz-card--list">
                <span className="features-menu__viz-row features-menu__viz-row--active" />
                <span className="features-menu__viz-row" />
                <span className="features-menu__viz-row" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default FeaturesMenu
