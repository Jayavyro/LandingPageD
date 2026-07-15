import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './NavDropdownItem.css'

interface NavDropdownItemProps {
  title: string
  description: string
  href: string
  icon: ReactNode
}

function NavDropdownItem({ title, description, href, icon }: NavDropdownItemProps) {
  const isInternalRoute = href.startsWith('/')
  const content = (
    <>
      <span className="nav-dropdown-item__icon" aria-hidden="true">
        {icon}
      </span>

      <span className="nav-dropdown-item__body">
        <span className="nav-dropdown-item__title">{title}</span>
        <span className="nav-dropdown-item__description">{description}</span>
      </span>
    </>
  )

  if (isInternalRoute) {
    return (
      <Link to={href} className="nav-dropdown-item">
        {content}
      </Link>
    )
  }

  return (
    <a href={href} className="nav-dropdown-item">
      {content}
    </a>
  )
}

export default NavDropdownItem
