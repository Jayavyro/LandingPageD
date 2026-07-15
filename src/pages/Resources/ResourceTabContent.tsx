import type { ResourceTabId } from '../../constants/resourcesPage'
import CompetitiveComparisons from './CompetitiveComparisons'
import ResourceBlog from './ResourceBlog'
import ResourceBenefits from './ResourceBenefits'
import ResourceCaseStudies from './ResourceCaseStudies'
import ResourceDocumentation from './ResourceDocumentation'
import ResourceVideos from './ResourceVideos'

interface ResourceTabContentProps {
  tabId: ResourceTabId
}

function ResourceTabContent({ tabId }: ResourceTabContentProps) {
  switch (tabId) {
    case 'blog':
      return <ResourceBlog />
    case 'case-studies':
      return <ResourceCaseStudies />
    case 'videos':
      return <ResourceVideos />
    case 'documentation':
      return <ResourceDocumentation />
    case 'benefits':
      return <ResourceBenefits />
    case 'competitive-comparisons':
      return <CompetitiveComparisons />
    default:
      return null
  }
}

export default ResourceTabContent
