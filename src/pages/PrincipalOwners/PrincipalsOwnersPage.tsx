import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Chatbot from '../../components/Chatbot/Chatbot'
import ContactUs from '../../components/ContactUs/ContactUs'
import {
  PO_AFTER_CARD,
  PO_BEFORE_CARD,
  PO_CAPABILITIES_EYEBROW,
  PO_CAPABILITIES_TITLE,
  PO_CAPABILITIES_VISUAL,
  PO_QUESTIONS_EYEBROW,
  PO_QUESTIONS_TITLE,
  PRINCIPAL_CAPABILITIES,
  PRINCIPAL_OWNER_QUESTIONS,
  PRINCIPAL_OWNERS_EYEBROW,
  PRINCIPAL_OWNERS_HEADLINE,
  PRINCIPAL_OWNERS_SUBTITLE,
} from '../../constants/principalOwners'
import BeforeAfterComparison from '../ProjectManagers/BeforeAfterComparison'
import ProjectCapabilities from '../ProjectManagers/ProjectCapabilities'
import ProjectManagerQuestions from '../ProjectManagers/ProjectManagerQuestions'
import '../ProjectManagers/ProjectManagersPage.css'

const EASE = [0.22, 1, 0.36, 1] as const

function PrincipalsOwnersPage() {
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
        <section className="project-managers" aria-labelledby="principal-owners-heading">
          <div className="project-managers__ambient" aria-hidden="true">
            <div className="project-managers__grid-pattern" />
            <div className="project-managers__glow project-managers__glow--center" />
          </div>

          <div className="project-managers__container">
            <header className="project-managers__intro">
              <motion.p className="project-managers__eyebrow" {...fadeUp(0)}>
                {PRINCIPAL_OWNERS_EYEBROW}
              </motion.p>

              <motion.h1
                id="principal-owners-heading"
                className="project-managers__title"
                {...fadeUp(0.06)}
              >
                {PRINCIPAL_OWNERS_HEADLINE}
              </motion.h1>

              <motion.p className="project-managers__subtitle" {...fadeUp(0.12)}>
                {PRINCIPAL_OWNERS_SUBTITLE}
              </motion.p>
            </header>

            <motion.div {...fadeUp(0.18)}>
              <BeforeAfterComparison beforeCard={PO_BEFORE_CARD} afterCard={PO_AFTER_CARD} />
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.28)}>
            <ProjectCapabilities
              eyebrow={PO_CAPABILITIES_EYEBROW}
              title={PO_CAPABILITIES_TITLE}
              visual={PO_CAPABILITIES_VISUAL}
              capabilities={PRINCIPAL_CAPABILITIES}
            />
          </motion.div>

          <motion.div {...fadeUp(0.32)}>
            <ProjectManagerQuestions
              eyebrow={PO_QUESTIONS_EYEBROW}
              title={PO_QUESTIONS_TITLE}
              questions={PRINCIPAL_OWNER_QUESTIONS}
            />
          </motion.div>
        </section>

        <ContactUs />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default PrincipalsOwnersPage
