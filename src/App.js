import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'

// Import the screens
import Homepage from './components/screens/Homepage'
import Skills from './components/screens/Skills'
import About from './components/screens/aboutMe'
import Projects from './components/screens/Projects'
import Contact from './components/screens/Contact'

import NaviBar from './components/navigation/NaviBar'
import SocMed from './components/navigation/socialMedia'

// const NaviBarWithRouter = withRouter(NaviBar)

const App = () => {
  return (
    <div className="app">
    
    <BrowserRouter>
    <NaviBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    <SocMed />
    </BrowserRouter>
    </div>
  )
}

export default App