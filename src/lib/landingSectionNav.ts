import type { Location, NavigateFunction } from 'react-router-dom'
import { scrollToHashWhenReady } from './scrollToSection'

export function isLandingSectionHref(href: string): boolean {
  return /^\/#[\w-]+$/.test(href)
}

export function getLandingSectionHash(href: string): string | null {
  const match = href.match(/^\/#(.+)$/)
  return match ? `#${match[1]}` : null
}

export function handleLandingSectionNav(
  href: string,
  location: Location,
  event?: { preventDefault: () => void },
): boolean {
  const hash = getLandingSectionHash(href)
  if (!hash) return false

  const isSameTarget = location.pathname === '/' && location.hash === hash

  if (isSameTarget) {
    event?.preventDefault()
    scrollToHashWhenReady(hash)
    return true
  }

  return false
}

export function navigateToLandingSection(
  href: string,
  location: Location,
  navigate: NavigateFunction,
): void {
  const hash = getLandingSectionHash(href)
  if (!hash) return

  if (location.pathname === '/' && location.hash === hash) {
    scrollToHashWhenReady(hash)
    return
  }

  navigate({ pathname: '/', hash })
}
