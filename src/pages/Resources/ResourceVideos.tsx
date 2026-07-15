import {
  RESOURCE_TAB_INTROS,
  RESOURCE_VIDEOS,
} from '../../constants/resourcesContent'
import './ResourcePanel.css'

function ResourceVideos() {
  const { eyebrow, title, intro } = RESOURCE_TAB_INTROS.videos

  return (
    <section className="resources-panel" aria-labelledby="resource-videos-heading">
      <header className="resources-panel__head">
        <p className="resources-panel__eyebrow">{eyebrow}</p>
        <h2 id="resource-videos-heading" className="resources-panel__title">
          {title}
        </h2>
        <p className="resources-panel__intro">{intro}</p>
      </header>

      <ul className="resources-panel__video-grid">
        {RESOURCE_VIDEOS.map((video) => (
          <li key={video.id}>
            <article className="resources-panel__video-card" aria-labelledby={`video-${video.id}`}>
              <video
                className="resources-panel__video-player"
                controls
                preload="metadata"
                playsInline
                aria-label={video.title}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="resources-panel__video-copy">
                <h3 id={`video-${video.id}`} className="resources-panel__video-title">
                  {video.title}
                </h3>
                <p className="resources-panel__video-description">{video.description}</p>
                <ul className="resources-panel__video-modules" aria-label="Related modules">
                  {video.modules.map((module) => (
                    <li key={module}>{module}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ResourceVideos
