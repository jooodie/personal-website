import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-stone-50">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="glow-orb absolute -left-32 top-0 h-[420px] w-[420px] animate-float" />
        <div className="glow-orb absolute -right-24 top-1/3 h-[380px] w-[380px] animate-float [animation-delay:2s]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(250,250,249,0)_0%,_rgba(245,245,244,0.9)_70%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
