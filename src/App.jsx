import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProjectReport from './pages/ProjectReport'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/project/badminton-defense-analysis"
          element={<ProjectReport />}
        />
      </Routes>
    </BrowserRouter>
  )
}
