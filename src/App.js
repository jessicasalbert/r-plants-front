import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import StoreFront from './components/StoreFront/StoreFront'
import PlantsContainer from './components/PlantsContainer/PlantsContainer'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'

class App extends React.Component {
  state = {
    cart: []
  }

  addToCart = (item) => {
    this.setState((prev) => ({
      cart: [...prev.cart, item]
    }))
  }

  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/plants" component={PlantsContainer}/>
          <Route path="/cart" render={() => (<Cart cart={this.state.cart}/>)}/>
          <Route path="/" render={() => (<StoreFront />)}/>
        </Switch>
      </Router>
    )
  }
}

export default App
