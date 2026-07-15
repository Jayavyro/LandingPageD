import {
  RESOURCE_DOC_SECTIONS,
  RESOURCE_TAB_INTROS,
} from '../../constants/resourcesContent'
import './ResourcePanel.css'

function ResourceDocumentation() {
  const { eyebrow, title, intro } = RESOURCE_TAB_INTROS.documentation

  return (
    <section className="resources-panel" aria-labelledby="resource-docs-heading">
      <header className="resources-panel__head">
        <p className="resources-panel__eyebrow">{eyebrow}</p>
        <h2 id="resource-docs-heading" className="resources-panel__title">
          {title}
        </h2>
        <p className="resources-panel__intro">{intro}</p>
      </header>

      <ul className="resources-panel__list">
        {RESOURCE_DOC_SECTIONS.map((section) => (
          <li key={section.id}>
            <section className="resources-panel__doc-section" aria-labelledby={`doc-${section.id}`}>
              <h3 id={`doc-${section.id}`} className="resources-panel__doc-section-title">
                {section.title}
              </h3>
              <p className="resources-panel__doc-section-desc">{section.description}</p>

              <div className="resources-panel__doc-guides">
                {section.guides.map((guide) => (
                  <article key={guide.title} className="resources-panel__doc-guide">
                    <h4 className="resources-panel__doc-guide-title">{guide.title}</h4>
                    <p className="resources-panel__doc-guide-body">{guide.body}</p>
                  </article>
                ))}
              </div>
            </section>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ResourceDocumentation
