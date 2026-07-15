import { motion, useReducedMotion } from 'framer-motion'
import type { WhyAvyroTimelineItem as TimelineItem } from '../../constants/whyAvyro'
import './WhyAvyroTimelineItem.css'

const EASE = [0.22, 1, 0.36, 1] as const

interface WhyAvyroTimelineItemProps {
  item: TimelineItem
  index: number
  isLast: boolean
}

function WhyAvyroTimelineItem({ item, index, isLast }: WhyAvyroTimelineItemProps) {
  const prefersReducedMotion = useReducedMotion()
  const isTextLeft = item.alignment === 'left'
  const isPanorama = item.layout === 'panorama'

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-64px' },
        transition: { duration: 0.5, delay: index * 0.08, ease: EASE },
      }

  const textMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: isPanorama ? 0 : isTextLeft ? -24 : 24, y: isPanorama ? 16 : 0 },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, margin: '-64px' },
        transition: { duration: 0.48, delay: 0.1 + index * 0.08, ease: EASE },
      }

  const imageMotion = prefersReducedMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          x: isPanorama ? 0 : isTextLeft ? 24 : -24,
          y: isPanorama ? 20 : 0,
          scale: isPanorama ? 1 : 0.97,
        },
        whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
        viewport: { once: true, margin: '-64px' },
        transition: { duration: 0.52, delay: 0.16 + index * 0.08, ease: EASE },
      }

  const textBlock = (
    <motion.div className="why-timeline-item__text" {...textMotion}>
      <span className="why-timeline-item__step" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="why-timeline-item__title">{item.title}</h3>
      <p className="why-timeline-item__copy">{item.description}</p>
    </motion.div>
  )

  const timelineVisualClass =
    isPanorama && item.alignment === 'left'
      ? 'timeline_left'
      : isPanorama && item.alignment === 'right'
        ? 'timeline_right'
        : ''

  const visualBlock = (
    <motion.div
      className={['why-timeline-item__visual', timelineVisualClass].filter(Boolean).join(' ')}
      {...imageMotion}
    >
      <div className="why-timeline-item__frame">
        <img
          src={item.image}
          alt={item.imageAlt}
          width={item.imageWidth}
          height={item.imageHeight}
          className="why-timeline-item__image"
          loading="lazy"
        />
      </div>
    </motion.div>
  )

  return (
    <motion.article
      className={[
        'why-timeline-item',
        `why-timeline-item--${item.layout}`,
        `why-timeline-item--text-${item.alignment}`,
      ].join(' ')}
      {...motionProps}
    >
      {isPanorama ? (
        <div className="why-timeline-item__panel">
          {textBlock}
          {visualBlock}
        </div>
      ) : (
        <>
          {textBlock}
          {visualBlock}
        </>
      )}

      {!isLast && <div className="why-timeline-item__connector" aria-hidden="true" />}
    </motion.article>
  )
}

export default WhyAvyroTimelineItem
