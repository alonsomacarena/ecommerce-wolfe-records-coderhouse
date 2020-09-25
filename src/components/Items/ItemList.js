import React from 'react';
import './ListItem.css';
import {Link} from 'react-router-dom';

function ItemList ({items, categories}) {

      return <ul className="list-items col-sm-9">
       {items.map((p) =>
     <li className="items col-sm-3" key={p.categories}>
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

  }
    
    export default ItemList;