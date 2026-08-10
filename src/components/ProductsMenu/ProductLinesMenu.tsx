import { PRODUCT_LINES_MENU } from '../../constants/navMenu'
import '../NavbarMenu/navDropdown.css'
import ProductModuleItem from './ProductModuleItem'
import './ProductLinesMenu.css'

interface ProductLinesMenuProps {
  onNavigate?: () => void
}

function ProductLinesMenu({ onNavigate }: ProductLinesMenuProps) {
  return (
    <div
      className="nav-dropdown product-lines-menu"
      role="region"
      aria-label="Products menu"
    >
      <div className="nav-dropdown__card">
        <div className="nav-dropdown__grid product-lines-menu__grid">
          <div className="nav-dropdown__col nav-dropdown__col--solo">
            <p className="nav-dropdown__eyebrow">Products</p>
            <ul className="nav-dropdown__list">
              {PRODUCT_LINES_MENU.map((module) => (
                <li key={module.title}>
                  <ProductModuleItem module={module} onClick={onNavigate} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductLinesMenu
