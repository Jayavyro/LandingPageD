import { motion, useReducedMotion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Chatbot from '../../components/Chatbot/Chatbot'
import ContactUs from '../../components/ContactUs/ContactUs'
import type { AfterCard, BeforeCard, CapabilitiesVisual, ProjectCapability } from '../../constants/projectManagers'
import BeforeAfterComparison from '../ProjectManagers/BeforeAfterComparison'
import ProjectCapabilities from '../ProjectManagers/ProjectCapabilities'
import ProjectManagerQuestions from '../ProjectManagers/ProjectManagerQuestions'
import '../ProjectManagers/ProjectManagersPage.css'

const EASE = [0.22, 1, 0.36, 1] as const

export interface UseCaseQuestion {
  question: string
  answer: string
}

export interface UseCaseRolePageProps {
  headingId: string
  eyebrow: string
  headline: string
  subtitle: string
  beforeCard: BeforeCard
  afterCard: AfterCard
  capabilitiesEyebrow: string
  capabilitiesTitle: string
  capabilitiesVisual: CapabilitiesVisual
  capabilities: readonly ProjectCapability[]
  questionsEyebrow: string
  questionsTitle: string
  questions: readonly UseCaseQuestion[]
}

function UseCaseRolePage({
  headingId,
  eyebrow,
  headline,
  subtitle,
  beforeCard,
  afterCard,
  capabilitiesEyebrow,
  capabilitiesTitle,
  capabilitiesVisual,
  capabilities,
  questionsEyebrow,
  questionsTitle,
  questions,
}: UseCaseRolePageProps) {
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
        <section className="project-managers" aria-labelledby={headingId}>
          <div className="project-managers__ambient" aria-hidden="true">
            <div className="project-managers__grid-pattern" />
            <div className="project-managers__glow project-managers__glow--center" />
          </div>

          <div className="project-managers__container">
            <header className="project-managers__intro">
              <motion.p className="project-managers__eyebrow" {...fadeUp(0)}>
                {eyebrow}
              </motion.p>

              <motion.h1 id={headingId} className="project-managers__title" {...fadeUp(0.06)}>
                {headline}
              </motion.h1>

              <motion.p className="project-managers__subtitle" {...fadeUp(0.12)}>
                {subtitle}
              </motion.p>
            </header>

            <motion.div {...fadeUp(0.18)}>
              <BeforeAfterComparison beforeCard={beforeCard} afterCard={afterCard} />
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.28)}>
            <ProjectCapabilities
              eyebrow={capabilitiesEyebrow}
              title={capabilitiesTitle}
              visual={capabilitiesVisual}
              capabilities={capabilities}
            />
          </motion.div>

          <motion.div {...fadeUp(0.32)}>
            <ProjectManagerQuestions
              eyebrow={questionsEyebrow}
              title={questionsTitle}
              questions={questions}
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

export default UseCaseRolePage
