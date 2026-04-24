import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Doctors from './components/Doctors'
import Testimonials from './components/Testimonials'
import Appointment from './components/Appointment'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Pricing />
      <Doctors />
      <Testimonials />
      <Appointment />
      <Blog />
      <Footer />
    </div>
  )
}
