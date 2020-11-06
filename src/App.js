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

  addToCart = (item, size, quantity) => {
    console.log(size, quantity)
    item['size'] = size
    item['quantity'] = quantity
    this.setState((prev) => ({
      cart: [...prev.cart, item]
    }))
  }

  render() {
    return (
      <Router>
        <NavBar cart={this.state.cart}/>
        <Switch>
          <Route path="/plants" render={() => (<PlantsContainer addToCart={this.addToCart}/>)}/>
          <Route path="/cart" render={() => (<Cart cart={this.state.cart}/>)}/>
          <Route path="/" render={() => (<StoreFront />)}/>
        </Switch>
      </Router>
    )
  }
}

export default App
