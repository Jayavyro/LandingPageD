import type { ReactNode } from 'react'
import './LandingDarkStack.css'

interface LandingDarkStackProps {
  children: ReactNode
}

function LandingDarkStack({ children }: LandingDarkStackProps) {
  return (
    <div className="landing-dark-stack">
    

      <div className="landing-dark-stack__ambient" aria-hidden="true">
        <div className="landing-dark-stack__grid" />
        <div className="landing-dark-stack__glow landing-dark-stack__glow--center" />
        <div className="landing-dark-stack__glow landing-dark-stack__glow--left" />
        <div className="landing-dark-stack__glow landing-dark-stack__glow--right" />
      </div>

      <div className="landing-dark-stack__content">{children}</div>

      <div className="landing-dark-stack__transition landing-dark-stack__transition--bottom" aria-hidden="true">
        <svg
          className="landing-dark-stack__curve landing-dark-stack__curve--bottom"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 H1440 V82 C1120,82 1120,6 720,6 C320,6 320,82 0,82 Z"
            fill="#060816"
          />
        </svg>
      </div>
    </div>
  )
}

export default LandingDarkStack
