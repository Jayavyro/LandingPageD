import {
  RESOURCE_BENEFIT_GROUPS,
  RESOURCE_TAB_INTROS,
} from '../../constants/resourcesContent'
import './ResourcePanel.css'

function ResourceBenefits() {
  const { eyebrow, title, intro } = RESOURCE_TAB_INTROS.benefits

  return (
    <section className="resources-panel" aria-labelledby="resource-benefits-heading">
      <header className="resources-panel__head">
        <p className="resources-panel__eyebrow">{eyebrow}</p>
        <h2 id="resource-benefits-heading" className="resources-panel__title">
          {title}
        </h2>
        <p className="resources-panel__intro">{intro}</p>
      </header>

      <ul className="resources-panel__list">
        {RESOURCE_BENEFIT_GROUPS.map((group) => (
          <li key={group.id}>
            <section className="resources-panel__benefit-group" aria-labelledby={`benefit-${group.id}`}>
              <h3 id={`benefit-${group.id}`} className="resources-panel__benefit-group-title">
                {group.title}
              </h3>
              <p className="resources-panel__benefit-group-intro">{group.intro}</p>

              <ul className="resources-panel__benefit-items">
                {group.items.map((item) => (
                  <li key={item.title} className="resources-panel__benefit-item">
                    <h4 className="resources-panel__benefit-item-title">{item.title}</h4>
                    <p className="resources-panel__benefit-item-body">{item.body}</p>
                  </li>
                ))}
              </ul>
            </section>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ResourceBenefits
