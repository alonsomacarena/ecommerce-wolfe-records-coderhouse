import React from 'react';
import './ItemList.css';
import {Link} from 'react-router-dom';

function ItemList ({items}) {

      return <ul className="list-items col-lg-9 col-md-12">
       {items.map((p) =>
     <li className="items col-lg-3 col-md-4" key={p.id}>
       <img src={`/images/${p.image}`} className="item-image" alt={p.imageAlt} />
       <h3 className="item-album">{p.album}</h3>
       <h4 className="item-artist">{p.artist}</h4>
       <div className="buttons-price-container">
      <p className="item-price">$AR {p.price}</p>
     <Link to={`/item/${p.id}`}>
      <button type="button" className="details-button" ><i className="fas fa-plus-circle"/></button></Link>
      <Link to={`/cart`}>
      <button type="button" className="cart-button"><i className="fas fa-shopping-cart"/></button></Link>
       </div></li>)}
      </ul>

  }
    
    export default ItemList;