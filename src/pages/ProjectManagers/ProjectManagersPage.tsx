import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Chatbot from '../../components/Chatbot/Chatbot'
import ContactUs from '../../components/ContactUs/ContactUs'
import {
  PROJECT_MANAGERS_EYEBROW,
  PROJECT_MANAGERS_HEADLINE,
  PROJECT_MANAGERS_SUBTITLE,
} from '../../constants/projectManagers'
import BeforeAfterComparison from './BeforeAfterComparison'
import ProjectCapabilities from './ProjectCapabilities'
import ProjectManagerQuestions from './ProjectManagerQuestions'
import './ProjectManagersPage.css'

const EASE = [0.22, 1, 0.36, 1] as const

function ProjectManagersPage() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.45, delay, ease: EASE },
        }

  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <section className="project-managers" aria-labelledby="project-managers-heading">
          <div className="project-managers__ambient" aria-hidden="true">
            <div className="project-managers__grid-pattern" />
            <div className="project-managers__glow project-managers__glow--center" />
          </div>

          <div className="project-managers__container">
            <header className="project-managers__intro">
              <motion.p className="project-managers__eyebrow" {...fadeUp(0)}>
                {PROJECT_MANAGERS_EYEBROW}
              </motion.p>

              <motion.h1
                id="project-managers-heading"
                className="project-managers__title"
                {...fadeUp(0.06)}
              >
                {PROJECT_MANAGERS_HEADLINE}
              </motion.h1>

              <motion.p className="project-managers__subtitle" {...fadeUp(0.12)}>
                {PROJECT_MANAGERS_SUBTITLE}
              </motion.p>
            </header>

            <motion.div {...fadeUp(0.18)}>
              <BeforeAfterComparison />
            </motion.div>

  
          </div>

          <motion.div {...fadeUp(0.28)}>
            <ProjectCapabilities />
          </motion.div>

          <motion.div {...fadeUp(0.32)}>
            <ProjectManagerQuestions />
          </motion.div>
        </section>

        <ContactUs />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default ProjectManagersPage
