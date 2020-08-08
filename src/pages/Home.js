import React from 'react';
import './home.css'
import NavBar from '../components/NavBar.js'

const welcome= "Bienvenido a la Tienda Virtual de Wolfe Records ! ";
const subtitle="Encontra la mejor colección de vinilos de BA !"

function Home() {
    return (
      <>
      <NavBar />
    <h1 className="welcome col-sm-10">{welcome}</h1>
    <h2 className="subtitle col-sm-10">{subtitle}</h2>
      </>
    );
  }
  
  export default Home;