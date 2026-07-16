import { Route, Routes, Navigate } from 'react-router-dom'
import GoToTopButton from './components/GoToTopButton/GoToTopButton'
import ScrollToTop from './components/ScrollToTop'
import LandingPage from './pages/LandingPage'
import ProjectManagersPage from './pages/ProjectManagers/ProjectManagersPage'
import PrincipalsOwnersPage from './pages/PrincipalOwners/PrincipalsOwnersPage'
import OperationsLeadersPage from './pages/OperationsLeaders/OperationsLeadersPage'
import AccountantsCfosPage from './pages/AccountantsCfos/AccountantsCfosPage'
import ResourcesPage from './pages/Resources/ResourcesPage'
import ProductModulePage from './pages/Products/ProductModulePage'
import PlatformProductPage from './pages/Products/PlatformProductPage'
import FeaturePage from './pages/Features/FeaturePage'
import IndustryPage from './pages/Industry/IndustryPage'
import PricingPage from './pages/Pricing/PricingPage'
import { DEFAULT_RESOURCE_TAB } from './constants/resourcesPage'
import { PRICING_ROUTE } from './constants/pricingPage'
import { PRODUCT_ROUTES } from './constants/productRoutes'

function App() {
  return (
    <>
      <ScrollToTop />
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
        <Route path="/products/:productId" element={<ProductModulePage />} />
        <Route path="/industry/:industryId" element={<IndustryPage />} />
        <Route path={PRICING_ROUTE} element={<PricingPage />} />
      </Routes>
    </>
  )
}

export default App
