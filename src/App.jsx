
import './App.css'
import Footer from './customer/components/Footer/Footer'
import AboutSalon from './customer/components/HomeComponents/AboutSalon/AboutSalon'
import HeroCards from './customer/components/HomeComponents/HeroCards/HeroCards'
import HeroSection from './customer/components/HomeComponents/HeroSection/HeroSection'
import MarketingSection from './customer/components/HomeComponents/MarketingSection/MarketingSection'
import OnlineBooking from './customer/components/HomeComponents/OnlineBooking/OnlineBooking'
import Navbar from './customer/components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <HeroCards/>
    <AboutSalon/>
    <OnlineBooking/>
    <MarketingSection/>
    <Footer/>
    
    </>
  )
}

export default App
