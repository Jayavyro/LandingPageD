import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { SolutionStory } from '../../constants/solutions'
import SolutionStoryContent from './SolutionStoryContent'
import './SolutionStoryRow.css'

interface SolutionStoryRowProps {
  story: SolutionStory
  reverse?: boolean
}

function SolutionStoryRow({ story, reverse = false }: SolutionStoryRowProps) {
  const prefersReducedMotion = useReducedMotion()
  const articleRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const Icon = story.icon
  const showVideo = Boolean(story.videoSrc) && !prefersReducedMotion

  useEffect(() => {
    const video = videoRef.current
    const container = mediaRef.current
    if (!video || !container || !showVideo) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [showVideo])

  return (
    <article
      ref={articleRef}
      id={story.id}
      className={[
        'solution-story',
        reverse && 'solution-story--reverse',
        `solution-story--${story.accent}`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div ref={mediaRef} className="solution-story__media">
        {showVideo ? (
          <video
            ref={videoRef}
            className="solution-story__video"
            src={story.videoSrc}
            muted
            playsInline
            loop
            preload="metadata"
            aria-label={`${story.title} product demo`}
          />
        ) : (
          <div className="solution-story__placeholder" aria-hidden="true">
            <span className="solution-story__placeholder-icon">
              <Icon strokeWidth={1.5} />
            </span>
          </div>
        )}
      </div>

      <SolutionStoryContent story={story} scrollTargetRef={articleRef} />
    </article>
  )
}

export default SolutionStoryRow
