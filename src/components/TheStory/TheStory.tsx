import { useEffect, useRef } from 'react'
import {
  THE_STORY_BEATS,
  THE_STORY_CLOSE,
  THE_STORY_CLOSE_MUTED,
  THE_STORY_CODE,
  THE_STORY_INTRO,
  THE_STORY_TAG,
} from '../../constants/theStory'
import './TheStory.css'

function TheStory() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = root.querySelectorAll<HTMLElement>('.story-reveal')

    if (reduceMotion) {
      nodes.forEach((node) => node.classList.add('story-reveal--in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('story-reveal--in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.22, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="story" id="the-story" ref={sectionRef} aria-label="The Story">
      <div className="story__wrap">
        <div className="story__tag story-reveal">
          <span className="story__code">{THE_STORY_CODE}</span>
          <span className="story__dot" aria-hidden="true" />
          <span>{THE_STORY_TAG}</span>
        </div>

        <p className="story__intro story-reveal">{THE_STORY_INTRO}</p>

        {THE_STORY_BEATS.map((beat) => (
          <div className="story__beat" key={beat.id}>
            <div className="story__beat-num" aria-hidden="true">
              {beat.number}
            </div>
            <div className="story-reveal">
              <div className="story__label">{beat.label}</div>
              <h3 className="story__question">{beat.question}</h3>
              <p className="story__body">{beat.body}</p>
            </div>
            <div className="story__punch-wrap story-reveal">
              <p className="story__punch">{beat.punch}</p>
            </div>
          </div>
        ))}

        <div className="story__close story-reveal">
          <p>{THE_STORY_CLOSE}</p>
          <p className="story__close-muted">{THE_STORY_CLOSE_MUTED}</p>
        </div>
      </div>
    </section>
  )
}

export default TheStory
