import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { NAVBAR_LOGO_ICON, MOBILE_NAVBAR_LOGO } from '../../constants/brandAssets'
import { NAV_LINKS, WHY_AVYRO_LINK, BOOK_DEMO_HREF } from '../../constants/navMenu'
import LandingHashLink from '../LandingHashLink/LandingHashLink'
import ProductsMenu from '../ProductsMenu/ProductsMenu'
import ResourcesMenu from '../ResourcesMenu/ResourcesMenu'
import SolutionsMenu from '../SolutionsMenu/SolutionsMenu'
import MobileNav from './MobileNav'
import './Navbar.css'
import './MobileNav.css'

type ActiveMenu = 'products' | 'use-case' | 'resources' | null

const SCROLL_DELTA_THRESHOLD = 8
const TOP_VISIBLE_OFFSET = 48

function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const navRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)
  const location = useLocation()

  const toggleMenu = (menu: ActiveMenu) => {
    setActiveMenu((current) => (current === menu ? null : menu))
    setIsMobileMenuOpen(false)
  }

  const closeMenus = () => {
    setActiveMenu(null)
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    closeMenus()
  }, [location.pathname])

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= TOP_VISIBLE_OFFSET) {
        setIsVisible(true)
      } else {
        const scrollDelta = currentScrollY - lastScrollY.current

        if (scrollDelta > SCROLL_DELTA_THRESHOLD) {
          setIsVisible(false)
          setActiveMenu(null)
          setIsMobileMenuOpen(false)
        } else if (scrollDelta < -SCROLL_DELTA_THRESHOLD) {
          setIsVisible(true)
        }
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenus()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const renderChevron = (isOpen: boolean) => (
    <svg
      className={`navbar__chevron ${isOpen ? 'navbar__chevron--open' : ''}`}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <header
      className={`navbar${isVisible ? '' : ' navbar--hidden'}`}
      ref={navRef}
      aria-hidden={!isVisible}
    >
      <div className={`navbar__bar${isMobileMenuOpen ? ' navbar__bar--menu-open' : ''}`}>
        <Link to="/" className="navbar__brand" aria-label="Avyro home" onClick={closeMenus}>
          <img
            src={NAVBAR_LOGO_ICON}
            alt=""
            className="navbar__logo navbar__logo--desktop"
            width={32}
            height={32}
          />
          <img
            src={MOBILE_NAVBAR_LOGO}
            alt="Avyro"
            className="navbar__logo navbar__logo--mobile"
            width={132}
            height={32}
          />
          <span className="navbar__brand-name">Avyro</span>
        </Link>

        <button
          type="button"
          className="navbar__menu-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setIsMobileMenuOpen((open) => !open)
            setActiveMenu(null)
          }}
        >
          <span className="navbar__menu-toggle-label">
            {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          </span>
          <span className="navbar__menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav className="navbar__nav navbar__nav--desktop" aria-label="Main navigation">
          <LandingHashLink to={WHY_AVYRO_LINK.href} className="navbar__nav-item" onClick={closeMenus}>
            {WHY_AVYRO_LINK.label}
          </LandingHashLink>

          <div className="navbar__dropdown navbar__dropdown--products">
            <button
              type="button"
              className={`navbar__nav-item navbar__nav-item--dropdown ${activeMenu === 'products' ? 'navbar__nav-item--active' : ''}`}
              aria-expanded={activeMenu === 'products'}
              aria-haspopup="true"
              onClick={() => toggleMenu('products')}
            >
              Products
              {renderChevron(activeMenu === 'products')}
            </button>
          </div>

          <div className="navbar__dropdown">
            <button
              type="button"
              className={`navbar__nav-item navbar__nav-item--dropdown ${activeMenu === 'use-case' ? 'navbar__nav-item--active' : ''}`}
              aria-expanded={activeMenu === 'use-case'}
              aria-haspopup="true"
              onClick={() => toggleMenu('use-case')}
            >
              Use Case
              {renderChevron(activeMenu === 'use-case')}
            </button>

            {activeMenu === 'use-case' && <SolutionsMenu />}
          </div>

          <div className="navbar__dropdown">
            <button
              type="button"
              className={`navbar__nav-item navbar__nav-item--dropdown ${activeMenu === 'resources' ? 'navbar__nav-item--active' : ''}`}
              aria-expanded={activeMenu === 'resources'}
              aria-haspopup="true"
              onClick={() => toggleMenu('resources')}
            >
              Resources
              {renderChevron(activeMenu === 'resources')}
            </button>

            {activeMenu === 'resources' && <ResourcesMenu />}
          </div>

          {NAV_LINKS.map((link) => (
            <LandingHashLink key={link.label} to={link.href} className="navbar__nav-item" onClick={closeMenus}>
              {link.label}
            </LandingHashLink>
          ))}
        </nav>

        <LandingHashLink to={BOOK_DEMO_HREF} className="navbar__cta navbar__cta--desktop" onClick={closeMenus}>
          Book a demo
        </LandingHashLink>

        {activeMenu === 'products' && <ProductsMenu />}

        <div id="mobile-navigation">
          <MobileNav isOpen={isMobileMenuOpen} onClose={closeMenus} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
