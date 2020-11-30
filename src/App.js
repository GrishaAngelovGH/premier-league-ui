import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, ContentPage } from 'components/Pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' children={<HomePage />} />
        <Route path='/content' children={<ContentPage />} />
      </Switch>
    </Router>
  )
}

export default App
