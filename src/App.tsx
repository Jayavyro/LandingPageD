import { Route, Routes, Navigate } from 'react-router-dom'
import GoToTopButton from './components/GoToTopButton/GoToTopButton'
import ScrollToTop from './components/ScrollToTop'
import SeoHead from './components/SeoHead/SeoHead'
import LandingPage from './pages/LandingPage'
import ProjectManagersPage from './pages/ProjectManagers/ProjectManagersPage'
import PrincipalsOwnersPage from './pages/PrincipalOwners/PrincipalsOwnersPage'
import OperationsLeadersPage from './pages/OperationsLeaders/OperationsLeadersPage'
import AccountantsCfosPage from './pages/AccountantsCfos/AccountantsCfosPage'
import ResourcesPage from './pages/Resources/ResourcesPage'
import ProductModulePage from './pages/Products/ProductModulePage'
import PlatformProductPage from './pages/Products/PlatformProductPage'
import FeaturePage from './pages/Features/FeaturePage'
import CaptureLeadsPage from './pages/Features/CaptureLeadsPage'
import BudgetsWorkplansPage from './pages/Features/BudgetsWorkplansPage'
import CreateProposalsPage from './pages/Features/CreateProposalsPage'
import DigitalSignaturesPage from './pages/Features/DigitalSignaturesPage'
import AssignStaffPage from './pages/Features/AssignStaffPage'
import TrackProjectsPage from './pages/Features/TrackProjectsPage'
import DocumentRepositoryPage from './pages/Features/DocumentRepositoryPage'
import LiveTimesheetsPage from './pages/Features/LiveTimesheetsPage'
import LiveUtilizationPage from './pages/Features/LiveUtilizationPage'
import GenerateRevenuePage from './pages/Features/GenerateRevenuePage'
import IndustryPage from './pages/Industry/IndustryPage'
import PricingPage from './pages/Pricing/PricingPage'
import TermsPage from './pages/Legal/TermsPage'
import { DEFAULT_RESOURCE_TAB } from './constants/resourcesPage'
import { PRICING_ROUTE } from './constants/pricingPage'
import { PRODUCT_ROUTES } from './constants/productRoutes'
import { TERMS_ROUTE } from './constants/termsPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <SeoHead />
      <GoToTopButton />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/use-case/project-managers" element={<ProjectManagersPage />} />
        <Route path="/use-case/principals-owners" element={<PrincipalsOwnersPage />} />
        <Route path="/use-case/operations-leaders" element={<OperationsLeadersPage />} />
        <Route path="/use-case/accountants-cfos" element={<AccountantsCfosPage />} />
        <Route path="/resources" element={<Navigate to={`/resources/${DEFAULT_RESOURCE_TAB}`} replace />} />
        <Route path="/resources/:tabId" element={<ResourcesPage />} />
        <Route path={PRODUCT_ROUTES.platform} element={<PlatformProductPage />} />
        <Route path={PRODUCT_ROUTES['auto-mapping']} element={<FeaturePage />} />
        <Route path={PRODUCT_ROUTES['gantt-chart']} element={<FeaturePage />} />
        <Route path={PRODUCT_ROUTES['capture-leads']} element={<CaptureLeadsPage />} />
        <Route path={PRODUCT_ROUTES['budgets-workplans']} element={<BudgetsWorkplansPage />} />
        <Route path={PRODUCT_ROUTES['create-proposals']} element={<CreateProposalsPage />} />
        <Route path={PRODUCT_ROUTES['digital-signatures']} element={<DigitalSignaturesPage />} />
        <Route path={PRODUCT_ROUTES['assign-staff']} element={<AssignStaffPage />} />
        <Route path={PRODUCT_ROUTES['track-projects']} element={<TrackProjectsPage />} />
        <Route path={PRODUCT_ROUTES['document-repository']} element={<DocumentRepositoryPage />} />
        <Route path={PRODUCT_ROUTES['live-timesheets']} element={<LiveTimesheetsPage />} />
        <Route path={PRODUCT_ROUTES['live-utilization']} element={<LiveUtilizationPage />} />
        <Route path={PRODUCT_ROUTES['generate-revenue']} element={<GenerateRevenuePage />} />
        <Route path="/products/:productId" element={<ProductModulePage />} />
        <Route path="/industry/:industryId" element={<IndustryPage />} />
        <Route path={PRICING_ROUTE} element={<PricingPage />} />
        <Route path={TERMS_ROUTE} element={<TermsPage />} />
      </Routes>
    </>
  )
}

export default App
