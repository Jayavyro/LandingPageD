import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import DoAndOutcome from '../components/DoAndOutcome/DoAndOutcome'
import OneRecordWeek from '../components/OneRecordWeek/OneRecordWeek'
import ExplorePlatform from '../components/ExplorePlatform/ExplorePlatform'
import CaseStudy from '../components/CaseStudy/CaseStudy'
import FinancialCalculator from '../components/FinancialCalculator/FinancialCalculator'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'
import Chatbot from '../components/Chatbot/Chatbot'
import '../App.css'
import CompetitiveTable from '../components/CompetitiveTable/CompetitiveTable'
import PricingSection from '../components/PricingSection/PricingSection'
import RevenueLeaks from '../components/RevenueLeaks/RevenueLeaks'
import TheSolution from '../components/TheSolution/TheSolution'

function LandingPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Hero />
        <RevenueLeaks />
        <TheSolution />
        <DoAndOutcome />
        <OneRecordWeek />
        <ExplorePlatform />
        <CompetitiveTable />
        
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
