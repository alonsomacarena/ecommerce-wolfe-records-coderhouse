import React from 'react';
import './home.css';

function Nosotros (){
    return(
        <>
        <section className="hero-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-9 hero-container">
              <h2 className="h2-nosotros">Nosotros</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="container-nosotros col-sm-12">
          <img className="image-us col-sm-6 col-md-11"
          src={`https://raw.githubusercontent.com/alonsomacarena/ecommerce-wolfe-records-coderhouse/master/public/images/nosotros.jpg`}  alt="vinyl player"/>
          <div className="container-text-nosotros col-sm-6 col-md-12">
          <h3 className="title-nosotros" >
            <img src={`/images/wolfe-logo-aqua.png`} className="img-nosotros" alt="logo wolfe records" />Records</h3>
          <p className="subtitle-text">La tienda virtual de vinilos más grande de Argentina</p>
          <p className="text-nosotros">Wolfe Records existe para crear un significado más profundo de la música para todos. La música establece un tono, impacta un estado de ánimo, contecta a las personas, documenta la historia, influye en la cultura y simplemente mejora la vida.</p>
          <p className="text-nosotros">En Wolfe Recordss, estamos aquí para hacer que su colección se vea y suene mejor que nunca facilitando la búsqueda de los álbumes que le gustan y a descubrir algunos clásicos ocultos.</p>
          </div>
      </div>
      </>
    )
}

export default Nosotros;