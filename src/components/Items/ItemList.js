import React, {useEffect, useState } from 'react';
import itemStore from './Item.js';
import './ItemList.css';


const ItemList = () => {

  function ProductList({ products }) {
    return <ul className="list-items col-sm-9">
     {products.map((p) => <li className="items col-sm-3" key={p.id}>
       <div className="div-imagen">Acá iria la imagen</div>
       <h3 className="item-album">{p.album}</h3>
       <h4 className="item-artist">{p.artist}</h4>
       <div className="buttons-price-container">
      <p className="item-price">$AR {p.price}</p>
      <button type="button" href="#" className="details-button">+</button>
      <button type="button" href="#" className="cart-button"><i className="fas fa-shopping-cart"/></button>
       </div></li>)}
    </ul>
  }
  function ProductsRender() {
    const [products, setProducts] = useState([]);
    //const [loading, setLoading] = useState(true);
    // Ejecutar un hola al inicio
    useEffect(() => {
      console.log('Hola');
     itemStore().then(res => {
        setProducts(res); // Set state -> Render
       //setLoading(false); // Set state -> Render
      });
    }, []);

    return <ProductList products={products}></ProductList>
  }

  return <ProductsRender/>
  

}
  
  export default ItemList;

  
