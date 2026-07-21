import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProjectReport from './pages/ProjectReport'
import AboutBio from './pages/AboutBio'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutBio />} />
        <Route
          path="/project/badminton-defense-analysis"
          element={<ProjectReport />}
        />
      </Routes>
    </BrowserRouter>
  )
}

