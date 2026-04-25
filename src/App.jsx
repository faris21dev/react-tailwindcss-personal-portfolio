import Navbar from '@/layouts/Navbar';
import Hero from '@/sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './layouts/Footer'
// import Experience from './sections/Experience'
// import Testimonials from './sections/Testimonials'

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Experience />
        <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
