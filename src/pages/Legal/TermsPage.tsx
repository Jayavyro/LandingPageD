import LegalDocumentPage from './LegalDocumentPage'
import { TERMS_HERO, TERMS_SECTIONS } from '../../constants/termsPage'

function TermsPage() {
  return (
    <LegalDocumentPage
      hero={TERMS_HERO}
      sections={TERMS_SECTIONS}
      headingId="terms-heading"
      tocLabel="Terms sections"
    />
  )
}

export default TermsPage
