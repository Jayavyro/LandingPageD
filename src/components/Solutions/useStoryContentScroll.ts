import { useEffect, useRef, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NAVBAR_GAP_PX = 15
const EARLY_START_BUFFER_PX = 80
const SCRUB_SMOOTHNESS = 2.75

function getNavbarBottom(): number {
  const bar = document.querySelector<HTMLElement>('.navbar__bar')
  if (bar) return Math.ceil(bar.getBoundingClientRect().bottom)

  const navbar = document.querySelector<HTMLElement>('.navbar')
  if (navbar) return Math.ceil(navbar.getBoundingClientRect().bottom)

  return 88
}

function getContentTopInArticle(article: HTMLElement, content: HTMLElement): number {
  return content.getBoundingClientRect().top - article.getBoundingClientRect().top
}

function getScrollStartPx(article: HTMLElement, content: HTMLElement): number {
  return Math.max(
    0,
    getNavbarBottom() +
      NAVBAR_GAP_PX -
      getContentTopInArticle(article, content) +
      EARLY_START_BUFFER_PX,
  )
}

function getContentTravel(article: HTMLElement, content: HTMLElement): number {
  const styles = getComputedStyle(article)
  const paddingBottom = Number.parseFloat(styles.paddingBottom) || 0
  const contentTop = getContentTopInArticle(article, content)
  const articleInnerBottom = article.offsetHeight - paddingBottom

  return Math.max(0, articleInnerBottom - contentTop - content.offsetHeight)
}

export function useStoryContentScroll(
  articleRef: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled) return

    const article = articleRef.current
    const content = contentRef.current
    if (!article || !content) return

    const ctx = gsap.context(() => {
      gsap.set(content, { y: 0, force3D: true })

      gsap.to(content, {
        y: () => getContentTravel(article, content),
        ease: 'none',
        scrollTrigger: {
          trigger: article,
          start: () => `top ${getScrollStartPx(article, content)}px`,
          end: 'bottom bottom',
          scrub: SCRUB_SMOOTHNESS,
          invalidateOnRefresh: true,
        },
      })

      const observer = new ResizeObserver(() => {
        ScrollTrigger.refresh()
      })

      observer.observe(article)
      observer.observe(content)

      const navbar = document.querySelector<HTMLElement>('.navbar')
      if (navbar) observer.observe(navbar)

      const refresh = () => ScrollTrigger.refresh()
      requestAnimationFrame(refresh)
      window.addEventListener('load', refresh, { once: true })

      return () => {
        observer.disconnect()
        gsap.set(content, { clearProps: 'transform' })
      }
    }, article)

    return () => ctx.revert()
  }, [articleRef, enabled])

  return { contentRef }
}
