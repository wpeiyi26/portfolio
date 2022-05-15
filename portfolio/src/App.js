import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'

// Import the screens
import Homepage from './components/screens/Homepage'
import Skills from './components/screens/Skills'
import aboutMe from './components/screens/aboutMe'
import Projects from './components/screens/Projects'
import Contact from './components/screens/Contact'

import NaviBar from './components/navigation/NaviBar'

const NaviBarWithRouter = withRouter(NaviBar)

const App = () => {
  return (
    <Router>
      <NaviBarWithRouter />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/about" component={aboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to = "/404" />
      </Switch>
    </Router>
  )
}

export default App