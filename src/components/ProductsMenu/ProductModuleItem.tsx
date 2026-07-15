import type { ProductModule } from '../../constants/navMenu'
import NavDropdownItem from '../NavbarMenu/NavDropdownItem'
import ModuleIcon from './ModuleIcon'

interface ProductModuleItemProps {
  module: ProductModule
}

function ProductModuleItem({ module }: ProductModuleItemProps) {
  return (
    <NavDropdownItem
      title={module.title}
      description={module.description}
      href={module.href ?? '#'}
      icon={<ModuleIcon name={module.icon} />}
    />
  )
}

export default ProductModuleItem
