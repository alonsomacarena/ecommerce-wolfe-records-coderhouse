
import React, {useEffect, useState } from 'react';
import ListItem from '../Items/ListItem.js';
import itemStore from '../Items/Item.js';
import {useParams,Link} from 'react-router-dom';

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    // ejecutar un console.log con mounted ItemList para ver si esta ok
  
   
      const item = new Promise ((res, rej) => {
      setTimeout(()=>{
      res([items])
      },3000);
      });
  
    useEffect(() => {
      console.log('mounted ItemDetailContainer');
      //itemStore es la funcion con los productos de item.js
      fetch('../Items/ListItem.js')
      item.then(res => {
       //la respuesta es un array con los productos de item.js
       setLoading(false);
       setItems(res); 
       console.log(res)
      });
    }, []);
    console.log(items)
  
    function ItemDetailCont({ items }) {
      return ( <>
        {items &&
          <ul className="list-items col-sm-9">
        <li className="items col-sm-3" key={items.id}>
          <img src={`/images/${items.image}`} className="item-image" />
          <h3 className="item-album">{items.album}</h3>
          <h4 className="item-artist">{items.artist}</h4>
          <div className="buttons-price-container">
         <p className="item-price">$AR {items.price}</p>
        <Link to={`/items/${items.id}`}>
         <button type="button" className="details-button">+</button></Link>
         <Link to={`/cart`}>
         <button type="button" href="#" className="cart-button"><i className="fas fa-shopping-cart"/></button></Link>
          </div></li>
         </ul>
       }
       </>
      )
    }
      return(
          <>
       {/* <ItemDetailCont items={items}></ItemDetailCont>*/}
        {loading ? <p style={{color:"white", textAlign:"center"}}>Loading ....</p>:null}
        </>
      )
  }
    
    export default ItemDetailContainer;