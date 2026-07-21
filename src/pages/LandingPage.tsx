import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import WhyAvyroV2 from '../components/WhyAvyroV2/WhyAvyroV2'
import WhyAvyro from '../components/WhyAvyro/WhyAvyro'
import HowAvyroV2 from '../components/HowAvyroV2/HowAvyroV2'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import Industry from '../components/Industry/Industry'
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
        <WhyAvyroV2 />
       
        <WhyAvyro />
        <HowAvyroV2 />
        <WhatWeDo />
        <Industry />
        <FinancialCalculator />
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
