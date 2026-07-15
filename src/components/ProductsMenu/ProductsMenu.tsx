import { PROJECTS_MENU } from '../../constants/navMenu'
import '../NavbarMenu/navDropdown.css'
import ProductModuleItem from './ProductModuleItem'
import ProductsFeatured from './ProductsFeatured'
import ProductsScheduler from './ProductsScheduler'
import './ProductsMenu.css'

function ProductsMenu() {
  return (
    <div className="nav-dropdown projects-menu" role="region" aria-label="Products menu">
      <div className="nav-dropdown__card">
        <div className="nav-dropdown__grid nav-dropdown__grid--3-featured">
          {PROJECTS_MENU.map((section) => (
            <div key={section.title} className="nav-dropdown__col">
              <p className="nav-dropdown__eyebrow">{section.title}</p>
              <ul className="nav-dropdown__list">
                {section.items.map((module) => (
                  <li key={module.title}>
                    <ProductModuleItem module={module} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="nav-dropdown__col projects-menu__featured-col">
            <div className="projects-menu__sidebar">
              <ProductsFeatured />
              <ProductsScheduler />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsMenu
