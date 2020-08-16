import React from 'react';
import './home.css'
import NavBar from '../components/NavBar/NavBar.js'
import ItemCount from '../components/ItemCount/ItemCount.js'

//const welcome= "Bienvenido a la Tienda Virtual de Wolfe Records ! ";
//const subtitle="Encontra la mejor colección de vinilos de BA !"

//<div className="container-welcome">
//<p className="welcome"> {welcome}</p>
//</div>

function Home() {
    return (
      <>
      <NavBar />
      <ItemCount
      initial={0}
      min={1}
      max={4}
      />
      </>
    );
  }
  
  export default Home;