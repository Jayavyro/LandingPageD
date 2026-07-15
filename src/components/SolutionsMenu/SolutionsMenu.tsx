import { USE_CASE_MENU } from '../../constants/useCaseMenu'
import '../NavbarMenu/navDropdown.css'
import UseCaseMenuItem from './UseCaseMenuItem'
import './SolutionsMenu.css'

function SolutionsMenu() {
  return (
    <div className="nav-dropdown solutions-menu" role="region" aria-label="Use Case menu">
      <div className="nav-dropdown__card">
        <div className="nav-dropdown__grid nav-dropdown__grid--2-1">
          {USE_CASE_MENU.map((section) => (
            <section key={section.title} className="nav-dropdown__col">
              <h3 className="nav-dropdown__eyebrow">{section.title}</h3>

              <ul
                className={[
                  'nav-dropdown__list',
                  section.layout === 'double' && 'nav-dropdown__list--grid-2',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {section.items.map((item) => (
                  <li key={item.title}>
                    <UseCaseMenuItem item={item} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SolutionsMenu
