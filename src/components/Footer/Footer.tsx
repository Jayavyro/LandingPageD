import { Shield } from 'lucide-react'
import { FOOTER_LOGO } from '../../constants/brandAssets'
import {
  FOOTER_COLUMNS,
  FOOTER_COPYRIGHT,
  FOOTER_LEGAL_LINKS,
  FOOTER_SECURITY_BADGES,
  FOOTER_SOCIAL_LINKS,
  FOOTER_TAGLINE,
} from '../../constants/footer'
import FooterColumnBlock from './FooterColumn'
import FooterNewsletter from './FooterNewsletter'
import FooterSocialIcon from './FooterSocialIcon'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <div className="footer__ambient" aria-hidden="true">
        <div className="footer__grid-pattern" />
        <div className="footer__glow footer__glow--left" />
        <div className="footer__glow footer__glow--right" />
      </div>

      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__brand-link" aria-label="Avyro home">
              <img
                src={FOOTER_LOGO}
                alt="Avyro"
                className="footer__logo"
                width={160}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </a>

            <p id="footer-heading" className="footer__tagline">
              {FOOTER_TAGLINE}
            </p>

            <div className="footer__social" aria-label="Social media">
              {FOOTER_SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  className="footer__social-link"
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FooterSocialIcon name={link.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__columns">
            {FOOTER_COLUMNS.map((column) => (
              <FooterColumnBlock key={column.id} column={column} />
            ))}
          </div>
        </div>

        <FooterNewsletter />

        <div className="footer__bottom">
          <div className="footer__trust">
            <div className="footer__security">
              <Shield className="footer__security-icon" aria-hidden="true" />
              <span>Enterprise-grade security</span>
            </div>

            <ul className="footer__badges" aria-label="Compliance certifications">
              {FOOTER_SECURITY_BADGES.map((badge) => (
                <li key={badge} className="footer__badge">
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__legal">
            <nav className="footer__legal-nav" aria-label="Legal">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <a key={link.label} className="footer__legal-link" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <p className="footer__copyright">{FOOTER_COPYRIGHT}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
