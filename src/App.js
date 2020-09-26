import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import NavBar from './components/NavBar/NavBar.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart.js';
import { CartProvider } from './components/Cart/CartContext';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App({categories}) {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
  <NavBar categories={categories} />
  <Switch>

    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/categories/:categoryId">
    <Home categories={categories} />
    </Route>

    <Route path="/nosotros">
    <Nosotros />
    </Route>

    <Route path="/contacto">
    <Contacto />
    </Route>

    <Route path="/item/:id">
    <ItemDetail />
    </Route>

    <Route path="/cart">
    <Cart/>
    </Route> 

  </Switch>
  </CartProvider> 
  <Footer/>
</BrowserRouter>
    </>
  );
}

export default App;

