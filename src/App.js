import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import StoreFront from './components/StoreFront/StoreFront'
import PlantsContainer from './components/PlantsContainer/PlantsContainer'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

class App extends React.Component {
  state = {
    cart: [],
    user: null
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
        <NavBar user={this.state.user} cart={this.state.cart}/>
        <Switch>
          <Route path="/plants" render={() => (<PlantsContainer addToCart={this.addToCart}/>)}/>
          <Route path="/cart" render={() => (<Cart cart={this.state.cart}/>)}/>
          <Route path="/signup" render={() => (<SignUp />)}/>
          <Route path="/login" render={() => (<Login />)}/>
          <Route path="/profile" render={() => (<Profile />)}/>
          <Route path="/" render={() => (<StoreFront/>)}/>
        </Switch>
      </Router>
    )
  }
}

export default App
