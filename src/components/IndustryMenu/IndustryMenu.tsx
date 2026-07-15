import { INDUSTRY_MENU_ITEMS } from '../../constants/industryMenu'
import '../NavbarMenu/navDropdown.css'
import IndustryMenuItemComponent from './IndustryMenuItem'
import './IndustryMenu.css'

function IndustryMenu() {
  return (
    <div className="nav-dropdown industry-menu" role="region" aria-label="Industries menu">
      <div className="nav-dropdown__card">
        <section className="industry-menu__section">
          <h3 className="nav-dropdown__eyebrow">AEC firms</h3>
          <p className="industry-menu__intro">
            Solutions shaped for how architecture, engineering, and construction firms operate.
          </p>
          <ul className="nav-dropdown__list">
            {INDUSTRY_MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <IndustryMenuItemComponent item={item} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default IndustryMenu
