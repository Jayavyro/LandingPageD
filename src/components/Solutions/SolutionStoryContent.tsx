import type { RefObject } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { SolutionStory } from '../../constants/solutions'
import { useStoryContentScroll } from './useStoryContentScroll'
import './SolutionStoryContent.css'

interface SolutionStoryContentProps {
  story: SolutionStory
  scrollTargetRef: RefObject<HTMLElement | null>
}

function SolutionStoryContent({ story, scrollTargetRef }: SolutionStoryContentProps) {
  const prefersReducedMotion = useReducedMotion()
  const scrollEnabled = !prefersReducedMotion
  const { contentRef } = useStoryContentScroll(scrollTargetRef, scrollEnabled)
  const Icon = story.icon

  return (
    <div ref={contentRef} className="solution-story-content">
      <div className="solution-story-content__head">
        <span className="solution-story-content__icon-wrap" aria-hidden="true">
          <Icon className="solution-story-content__icon" strokeWidth={1.75} />
        </span>
        <h3 className="solution-story-content__title">{story.title}</h3>
      </div>

      <div className="solution-story-content__section">
        <p className="solution-story-content__label">Modules Included</p>
        <ul className="solution-story-content__modules">
          {story.modules.map((module) => (
            <li key={module}>
              <span className="solution-story-content__module">{module}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="solution-story-content__section solution-story-content__section--value">
        <p className="solution-story-content__label">Value</p>
        <p className="solution-story-content__value">{story.value}</p>
      </div>

      <a href={story.href} className="solution-story-content__cta">
        Explore solution
      </a>
    </div>
  )
}

export default SolutionStoryContent
