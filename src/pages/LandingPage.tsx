import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import RevenueLeaks from '../components/RevenueLeaks/RevenueLeaks'
import HowAvyroWorks from '../components/HowAvyroWorks/HowAvyroWorks'
import DoAndOutcome from '../components/DoAndOutcome/DoAndOutcome'
import LandingDarkStack from '../components/LandingDarkStack/LandingDarkStack'
import Industry from '../components/Industry/Industry'
import WhyAvyro from '../components/WhyAvyro/WhyAvyro'
import CaseStudy from '../components/CaseStudy/CaseStudy'
import FinancialCalculator from '../components/FinancialCalculator/FinancialCalculator'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'
import Chatbot from '../components/Chatbot/Chatbot'
import '../App.css'
import WorkflowSolutions from '../components/WorkflowSolutions/WorkflowSolutions'
import CompetitiveTable from '../components/CompetitiveTable/CompetitiveTable'
import PricingSection from '../components/PricingSection/PricingSection'

function LandingPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Hero />
        <RevenueLeaks />
    
        <DoAndOutcome />
       
       
        <LandingDarkStack>
          <Industry />
          
          <WhyAvyro />
          <HowAvyroWorks />
        </LandingDarkStack>
        
        <CompetitiveTable />
        <WorkflowSolutions />
        <CaseStudy />
        
        <FinancialCalculator />
        
       
        <PricingSection />
        <Testimonials />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default LandingPage
