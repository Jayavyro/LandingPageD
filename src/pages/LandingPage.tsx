import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import TheStory from '../components/TheStory/TheStory'
import CompetitiveTable from '../components/CompetitiveTable/CompetitiveTable'
import ProductDrive from '../components/ProductDrive/ProductDrive'
import ProductX from '../components/ProductX/ProductX'
import RevenueLeaks from '../components/RevenueLeaks/RevenueLeaks'
import TheSolution from '../components/TheSolution/TheSolution'
import OneRecordWeek from '../components/OneRecordWeek/OneRecordWeek'
import ExplorePlatform from '../components/ExplorePlatform/ExplorePlatform'
import CompanyAbout from '../components/CompanyAbout/CompanyAbout'
import PricingSection from '../components/PricingSection/PricingSection'
import DeltekSunset from '../components/DeltekSunset/DeltekSunset'
import FinancialCalculator from '../components/FinancialCalculator/FinancialCalculator'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'
import Chatbot from '../components/Chatbot/Chatbot'
import '../App.css'

function LandingPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Hero />
        <TheStory />
        {/* <CompetitiveTable /> */}
        <ProductDrive />
        <ProductX />
        <RevenueLeaks />
        <TheSolution />
        <OneRecordWeek />
        <ExplorePlatform />
        <CompanyAbout />
        <PricingSection />
        <FAQ />
        <DeltekSunset />
        <FinancialCalculator />
        {/* <Testimonials /> */}
        
        <ContactUs />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default LandingPage
