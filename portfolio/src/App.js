import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'

// Import the screens
import Homepage from './components/screens/Homepage'

import NaviBar from './components/navigation/NaviBar'

const NaviBarWithRouter = withRouter(NaviBar)

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Redirect to = "/404" />
      </Switch>
    </Router>
  )
}

export default App