import {
  RESOURCE_CASE_STUDIES,
  RESOURCE_TAB_INTROS,
} from '../../constants/resourcesContent'
import './ResourcePanel.css'

function ResourceCaseStudies() {
  const { eyebrow, title, intro } = RESOURCE_TAB_INTROS['case-studies']

  return (
    <section className="resources-panel" aria-labelledby="resource-case-studies-heading">
      <header className="resources-panel__head">
        <p className="resources-panel__eyebrow">{eyebrow}</p>
        <h2 id="resource-case-studies-heading" className="resources-panel__title">
          {title}
        </h2>
        <p className="resources-panel__intro">{intro}</p>
      </header>

      <ul className="resources-panel__list">
        {RESOURCE_CASE_STUDIES.map((study) => (
          <li key={study.id}>
            <article className="resources-panel__case-study" aria-labelledby={`case-${study.id}`}>
              <p className="resources-panel__firm-type">{study.firmType}</p>
              <h3 id={`case-${study.id}`} className="resources-panel__case-title">
                {study.headline}
              </h3>
              <p className="resources-panel__case-challenge">{study.challenge}</p>

              <div className="resources-panel__case-columns">
                <div className="resources-panel__case-block">
                  <p className="resources-panel__case-block-title">Approach</p>
                  <ul className="resources-panel__case-list">
                    {study.approach.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="resources-panel__case-block">
                  <p className="resources-panel__case-block-title">Outcomes</p>
                  <ul className="resources-panel__case-list">
                    {study.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ResourceCaseStudies
