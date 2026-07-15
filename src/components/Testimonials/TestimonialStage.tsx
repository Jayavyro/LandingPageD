import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import type { Testimonial } from '../../constants/testimonials'
import './TestimonialStage.css'

const EASE = [0.22, 1, 0.36, 1] as const
const TRANSITION_MS = 400

interface TestimonialStageProps {
  testimonial: Testimonial
  activeIndex: number
  total: number
  direction: number
  onNext: () => void
  onPrev: () => void
  onGoTo: (index: number, nextDirection?: number) => void
  onPause: () => void
  onResume: () => void
  onTouchStart: (clientX: number) => void
  onTouchEnd: (clientX: number) => void
}

function TestimonialStage({
  testimonial,
  activeIndex,
  total,
  direction,
  onNext,
  onPrev,
  onGoTo,
  onPause,
  onResume,
  onTouchStart,
  onTouchEnd,
}: TestimonialStageProps) {
  const prefersReducedMotion = useReducedMotion()

  const slideVariants = {
    enter: (slideDirection: number) => ({
      opacity: 0,
      x: prefersReducedMotion ? 0 : slideDirection * 32,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (slideDirection: number) => ({
      opacity: 0,
      x: prefersReducedMotion ? 0 : slideDirection * -32,
    }),
  }

  return (
    <div
      className="testimonial-stage"
      onMouseEnter={onPause}
      onMouseLeave={onResume}
      onFocusCapture={onPause}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onResume()
        }
      }}
    >
      <div
        className="testimonial-stage__panel"
        aria-live="polite"
        aria-atomic="true"
        aria-roledescription="carousel"
        onTouchStart={(event) => onTouchStart(event.touches[0]?.clientX ?? 0)}
        onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
      >
        <span className="testimonial-stage__watermark" aria-hidden="true">
          &ldquo;
        </span>

        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.article
            key={testimonial.id}
            className="testimonial-stage__content"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: TRANSITION_MS / 1000,
              ease: EASE,
            }}
          >
            <div className="testimonial-stage__stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className="testimonial-stage__star"
                  aria-hidden="true"
                  fill="currentColor"
                />
              ))}
            </div>

            <blockquote className="testimonial-stage__quote">
              <p>{testimonial.quote}</p>
            </blockquote>

            <footer className="testimonial-stage__footer">
              <div className="testimonial-stage__author">
                <p className="testimonial-stage__name">{testimonial.name}</p>
                <p className="testimonial-stage__role">
                  {testimonial.role} &bull; {testimonial.company}
                </p>
              </div>

              <div className="testimonial-stage__controls">
                <button
                  type="button"
                  className="testimonial-stage__arrow"
                  onClick={onPrev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="testimonial-stage__arrow"
                  onClick={onNext}
                  aria-label="Next testimonial"
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>
            </footer>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="testimonial-stage__dots" aria-hidden="true">
        {Array.from({ length: total }, (_, index) => (
          <button
            key={index}
            type="button"
            className={`testimonial-stage__dot${
              index === activeIndex ? ' testimonial-stage__dot--active' : ''
            }`}
            tabIndex={-1}
            onClick={() => onGoTo(index, index > activeIndex ? 1 : -1)}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialStage
