import ShortFeaturePage from './ShortFeaturePage'
import { DOCUMENT_REPOSITORY_PAGE } from '../../constants/documentRepositoryPage'

function DocumentRepositoryPage() {
  return (
    <ShortFeaturePage
      content={DOCUMENT_REPOSITORY_PAGE}
      headingId="document-repository-heading"
    />
  )
}

export default DocumentRepositoryPage
