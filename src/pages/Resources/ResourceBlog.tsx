import {
  RESOURCE_BLOG_POSTS,
  RESOURCE_TAB_INTROS,
} from '../../constants/resourcesContent'
import './ResourcePanel.css'

function ResourceBlog() {
  const { eyebrow, title, intro } = RESOURCE_TAB_INTROS.blog

  return (
    <section className="resources-panel" aria-labelledby="resource-blog-heading">
      <header className="resources-panel__head">
        <p className="resources-panel__eyebrow">{eyebrow}</p>
        <h2 id="resource-blog-heading" className="resources-panel__title">
          {title}
        </h2>
        <p className="resources-panel__intro">{intro}</p>
      </header>

      <ul className="resources-panel__list">
        {RESOURCE_BLOG_POSTS.map((post) => (
          <li key={post.id}>
            <article className="resources-panel__article" aria-labelledby={`blog-${post.id}`}>
              <span className="resources-panel__category">{post.category}</span>
              <h3 id={`blog-${post.id}`} className="resources-panel__article-title">
                {post.title}
              </h3>
              <p className="resources-panel__summary">{post.summary}</p>
              <div className="resources-panel__body">
                {post.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ResourceBlog
