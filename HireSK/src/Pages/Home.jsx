import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import Services from '../components/Services'
import OurWork from '../components/OurWork'
import Teams from '../components/Teams'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

const Home = ({ theme, setTheme }) => {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <AboutUs />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
    </>
  )
}

export default Home
