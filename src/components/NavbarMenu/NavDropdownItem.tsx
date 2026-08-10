import type { ReactNode } from 'react'
import LandingHashLink from '../LandingHashLink/LandingHashLink'
import './NavDropdownItem.css'

interface NavDropdownItemProps {
  title: string
  description: string
  href: string
  icon: ReactNode
  badge?: string
  onClick?: () => void
}

function NavDropdownItem({
  title,
  description,
  href,
  icon,
  badge,
  onClick,
}: NavDropdownItemProps) {
  return (
    <LandingHashLink to={href} className="nav-dropdown-item" onClick={onClick}>
      <span className="nav-dropdown-item__icon" aria-hidden="true">
        {icon}
      </span>

      <span className="nav-dropdown-item__body">
        <span className="nav-dropdown-item__title-row">
          <span className="nav-dropdown-item__title">{title}</span>
          {badge ? (
            <span className="nav-dropdown-item__badge">{badge}</span>
          ) : null}
        </span>
        <span className="nav-dropdown-item__description">{description}</span>
      </span>
    </LandingHashLink>
  )
}

export default NavDropdownItem
