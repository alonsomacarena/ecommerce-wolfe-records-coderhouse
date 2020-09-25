import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import NavBar from './components/NavBar/NavBar.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart.js';
import { CartProvider } from './components/Cart/CartContext';


// Todos los componentes que esten encerrados por mi Provider (o sea, {children}), van a poder acceder a las propiedades que tengo definidas en mi Contexto.
// Las propiedades que definí en mi contexto son: seriesArray, agregarSerie, quitarSerie

// Entonces, CatalogoSeries y SeriesVistas, van a compartir mi array de series, que definí en el estado de mi contexto, como también, las funciones de agregarSerie y quitarSerie.


function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
  <NavBar />
  <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/items:id">
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

