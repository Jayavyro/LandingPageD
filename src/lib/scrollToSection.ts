function getNavbarOffset(): number {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue('--navbar-scroll-offset')
    .trim()

  if (!value) return 88

  const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) || 16

  if (value.endsWith('rem')) {
    return Number.parseFloat(value) * rootFontSize
  }

  if (value.endsWith('px')) {
    return Number.parseFloat(value)
  }

  return Number.parseFloat(value) || 88
}

export function scrollToSectionId(
  id: string,
  behavior: ScrollBehavior = 'smooth',
): boolean {
  const element = document.getElementById(id)
  if (!element) return false

  const offset = getNavbarOffset()
  const top = element.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top: Math.max(top, 0), behavior })
  return true
}

export function scrollToHash(
  hash: string,
  behavior: ScrollBehavior = 'smooth',
): boolean {
  const id = hash.replace(/^#/, '')
  if (!id) return false

  return scrollToSectionId(id, behavior)
}

export function scrollToHashWhenReady(
  hash: string,
  options?: { maxAttempts?: number; behavior?: ScrollBehavior },
): void {
  const maxAttempts = options?.maxAttempts ?? 48
  const behavior =
    options?.behavior ??
    (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth')

  let attempts = 0

  const tryScroll = () => {
    if (scrollToHash(hash, behavior)) return

    attempts += 1
    if (attempts < maxAttempts) {
      window.requestAnimationFrame(tryScroll)
    }
  }

  tryScroll()
}
