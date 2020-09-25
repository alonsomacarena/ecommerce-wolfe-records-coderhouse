import React, {useEffect, useState } from 'react';
//import itemStore from './Item.js';
import './ListItem.css';
import {Link} from 'react-router-dom';


const ListItem = ({items:id, image, album, artist, price}) => {
  
 function toDetail(id){
   console.log("going to detail for item", id)
 };

    return (
    <ul className="list-items col-sm-9">
     <li className="items col-sm-3" key={id}>
       <img src={`/images/${image}`} className="item-image" />
       <h3 className="item-album">{album}</h3>
       <h4 className="item-artist">{artist}</h4>
       <div className="buttons-price-container">
      <p className="item-price">$AR {price}</p>
     <Link to={`/items/${id}`}>
      <button type="button" onClick={()=>toDetail(id)} className="details-button">+</button></Link>
      <Link to={`/cart`}>
      <button type="button" href="#" className="cart-button"><i className="fas fa-shopping-cart"/></button></Link>
       </div></li>
    </ul>
    )
  }
  
  export default ListItem;

  
