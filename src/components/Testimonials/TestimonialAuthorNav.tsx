import type { Testimonial } from '../../constants/testimonials'
import './TestimonialAuthorNav.css'

interface TestimonialAuthorNavProps {
  testimonials: Testimonial[]
  activeIndex: number
  onSelect: (index: number) => void
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TestimonialAuthorNav({
  testimonials,
  activeIndex,
  onSelect,
}: TestimonialAuthorNavProps) {
  return (
    <div className="testimonial-author-nav" role="tablist" aria-label="Choose a testimonial">
      {testimonials.map((testimonial, index) => {
        const isActive = index === activeIndex

        return (
          <button
            key={testimonial.id}
            type="button"
            role="tab"
            className={`testimonial-author-nav__item${
              isActive ? ' testimonial-author-nav__item--active' : ''
            }`}
            aria-selected={isActive}
            aria-label={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
            onClick={() => onSelect(index)}
          >
            <span className="testimonial-author-nav__avatar" aria-hidden="true">
              {getInitials(testimonial.name)}
            </span>
            <span className="testimonial-author-nav__copy">
              <span className="testimonial-author-nav__name">{testimonial.name}</span>
              <span className="testimonial-author-nav__role">
                {testimonial.role} &bull; {testimonial.company}
              </span>
            </span>
            <span className="testimonial-author-nav__indicator" aria-hidden="true" />
          </button>
        )
      })}
    </div>
  )
}

export default TestimonialAuthorNav
