import { type FormEvent, useState } from 'react'
import heroBg from '../../ChatGPT Image Jul 9, 2026, 11_48_31 AM.png'
import fivdLogo from '../../695775c397e9ba97edd85611_26faefd428f8a4efc1b4b947dd0a2003_FivD white logo 2.webp'
import './Hero.css'

function Hero() {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section
      className="hero"
      aria-label="Hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero__content">
        <p className="hero__badge">AI-NATIVE OPERATING SYSTEM FOR AEC</p>

        <h1 className="hero__headline">
          <span className="hero__headline-line">Run Every Project.</span>
          <span className="hero__headline-line">Empower Every Team.</span>
          <span className="hero__headline-line hero__headline-line--gradient">
            Build the Future.
          </span>
        </h1>

        <p className="hero__description">
          The AI-native operating system built for architecture, engineering, and
          construction. Unify projects, teams, and operations in one intelligent
          platform.
        </p>

        <div className="hero__actions">
          <form className="hero__email-form" onSubmit={handleEmailSubmit}>
            <label htmlFor="hero-email" className="hero__email-label">
              Email address
            </label>
            <input
              id="hero-email"
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="hero__email-input"
              autoComplete="email"
              required
            />
            <button type="submit" className="hero__cta hero__cta--primary">
              Get Started
            </button>
          </form>

  
        </div>

        <div className="hero__trusted">
          <p className="hero__trusted-label">Trusted by</p>
          <div className="hero__trusted-brand" aria-label="FivD">
            <span className="hero__trusted-icon-wrap">
              <img src={fivdLogo} alt="" className="hero__trusted-icon" />
            </span>
            <span className="hero__trusted-name">fivD</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
