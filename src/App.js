import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import ProductDetails from './components/ProductDetails';
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={ProductDetails} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </>
    );
  }
}

export default App;
