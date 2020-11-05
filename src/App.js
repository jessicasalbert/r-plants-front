import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import StoreFront from './components/StoreFront/StoreFront'

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route path="/" component={StoreFront}></Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App
