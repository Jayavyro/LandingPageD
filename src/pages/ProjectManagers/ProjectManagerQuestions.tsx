import {
  PM_QUESTIONS_EYEBROW,
  PM_QUESTIONS_TITLE,
  PROJECT_MANAGER_QUESTIONS,
} from '../../constants/projectManagers'
import type { ProjectManagerQuestion } from '../../constants/projectManagers'
import './ProjectManagerQuestions.css'

interface ProjectManagerQuestionsProps {
  eyebrow?: string
  title?: string
  questions?: readonly ProjectManagerQuestion[]
}

function ProjectManagerQuestions({
  eyebrow = PM_QUESTIONS_EYEBROW,
  title = PM_QUESTIONS_TITLE,
  questions = PROJECT_MANAGER_QUESTIONS,
}: ProjectManagerQuestionsProps) {
  return (
    <section className="pm-questions" aria-labelledby="pm-questions-heading">
      <div className="pm-questions__shell">
        <header className="pm-questions__intro">
          <p className="pm-questions__eyebrow">{eyebrow}</p>
          <h2 id="pm-questions-heading" className="pm-questions__title">
            {title}
          </h2>
        </header>

        <div className="pm-questions__grid">
          {questions.map((item, index) => (
            <article key={item.question} className="pm-questions__item">
              <span className="pm-questions__number" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="pm-questions__question">{item.question}</h3>
              <p className="pm-questions__answer">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectManagerQuestions
