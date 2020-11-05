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
        <div>
        <NavBar/>
        <Switch>
          <Route path="/cart" render={() => (<Cart cart={this.state.cart}/>)}/>
          {/* <Route path="/plants" render={() => (<StoreFront addToCart={this.addToCart}/>)}/> */}
          <Route path="/" render={() => (<StoreFront addToCart={this.addToCart}/>)}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App
