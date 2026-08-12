import LegalDocumentPage from './LegalDocumentPage'
import { PRIVACY_HERO, PRIVACY_SECTIONS } from '../../constants/privacyPage'

function PrivacyPage() {
  return (
    <LegalDocumentPage
      hero={PRIVACY_HERO}
      sections={PRIVACY_SECTIONS}
      headingId="privacy-heading"
      tocLabel="Privacy policy sections"
    />
  )
}

export default PrivacyPage
