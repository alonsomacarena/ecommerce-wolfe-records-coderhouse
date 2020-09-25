import React, {useEffect, useState } from 'react';
import itemStore from './Item.js';
import './ListItem.css';
import {Link} from 'react-router-dom';
import {getFirestore} from '../../firebase';

function ItemList () {

    const [items, setItems] = useState([]);
    //const [loading, setLoading] = useState(true);
    // ejecutar un console.log con mounted ItemList para ver si esta ok
    useEffect(() => {
      console.log('mounted ItemList');
      const db = getFirestore();
      const itemCollection = db.collection('items');
      //itemStore es la funcion con los productos de item.js
     itemStore().then(res => {
       //la respuesta es un array con los productos de item.js
        setItems(res); 
        console.log(res)
       //setLoading(false); // Set state -> Render
      });
    }, []);
  
    function ProductList({ items }) {
      return <ul className="list-items col-sm-9">
       {items.map((p) =>
     <li className="items col-sm-3" key={p.id}>
       <img src={`/images/${p.image}`} className="item-image" />
       <h3 className="item-album">{p.album}</h3>
       <h4 className="item-artist">{p.artist}</h4>
       <div className="buttons-price-container">
      <p className="item-price">$AR {p.price}</p>
     <Link to={`/items${p.id}`}>
      <button type="button" className="details-button" ><i className="fas fa-plus-circle"/></button></Link>
      <Link to={`/cart`}>
      <button type="button" className="cart-button"><i className="fas fa-shopping-cart"/></button></Link>
       </div></li>)}
      </ul>
    };
  
    return(
        <ProductList items={items}>
        </ProductList>
      )
  }
    
    export default ItemList;