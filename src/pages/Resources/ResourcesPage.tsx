import { motion, useReducedMotion } from 'framer-motion'
import { Navigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Chatbot from '../../components/Chatbot/Chatbot'
import {
  DEFAULT_RESOURCE_TAB,
  isResourceTabId,
  resolveResourceTabId,
  RESOURCES_HERO,
} from '../../constants/resourcesPage'
import ResourceTabContent from './ResourceTabContent'
import ResourcesTabs from './ResourcesTabs'
import './ResourcesPage.css'

const EASE = [0.22, 1, 0.36, 1] as const

function ResourcesPage() {
  const { tabId } = useParams()
  const prefersReducedMotion = useReducedMotion()

  if (tabId && !isResourceTabId(tabId)) {
    return <Navigate to={`/resources/${DEFAULT_RESOURCE_TAB}`} replace />
  }

  const activeTab = resolveResourceTabId(tabId) ?? DEFAULT_RESOURCE_TAB

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
        <section className="resources-page" aria-labelledby="resources-heading">
          <div className="resources-page__ambient" aria-hidden="true">
            <div className="resources-page__grid-pattern" />
            <div className="resources-page__glow resources-page__glow--center" />
          </div>

          <div className="resources-page__container">
            <header className="resources-page__hero">
              <motion.span className="resources-page__badge" {...fadeUp(0)}>
                {RESOURCES_HERO.badge}
              </motion.span>

              <motion.h1
                id="resources-heading"
                className="resources-page__title"
                {...fadeUp(0.06)}
              >
                {RESOURCES_HERO.title}
              </motion.h1>

              <motion.p className="resources-page__subtitle" {...fadeUp(0.12)}>
                {RESOURCES_HERO.subtitle}
              </motion.p>
            </header>

            <motion.div {...fadeUp(0.18)}>
              <ResourcesTabs />
            </motion.div>

            <motion.div className="resources-page__content" {...fadeUp(0.24)}>
              <ResourceTabContent tabId={activeTab} />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default ResourcesPage
