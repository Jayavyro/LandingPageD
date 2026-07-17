import type { MouseEvent, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { handleLandingSectionNav, isLandingSectionHref } from '../../lib/landingSectionNav'

interface LandingHashLinkProps {
  to: string
  className?: string
  onClick?: () => void
  children: ReactNode
}

function LandingHashLink({ to, className, onClick, children }: LandingHashLinkProps) {
  const location = useLocation()

  if (!isLandingSectionHref(to)) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.()
    handleLandingSectionNav(to, location, event)
  }

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default LandingHashLink
