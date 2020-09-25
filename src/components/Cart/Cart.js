import React from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from './CartContext.js';
import './Cart.css';


function CartRender (){

const {cartArray} = useCartContext();

return(
    <>
    <ul className="cart-list col-sm-12" >
{cartArray.map((item =>  
    <li className="cart-item col-sm-4">
    <img src={`/images/${item.image}`} className="cart-item-image" key={item.image} />
    <div className="cart-item-text-container">
    <p className="cart-item-album" key={item.album}>{item.album}</p>
    <p className="cart-item-artist" key={item.artist}>{item.artist}</p>
   <p className="cart-item-price" key={item.price}>$AR {item.price}</p>
   </div>
<div className="cart-item-quantity">Cantidad: 
<p className="cart-item-quantity-number" key={item.quantity}>{item.quantity}</p></div>
<button type="button" className=" delete-button" ><i className="fas fa-trash-alt"/></button>
   </li>
))}
</ul>      
    </>
    )
}


function Cart (){

const {cartEmpty}= useCartContext();

return(
    <>
    {cartEmpty === 0 &&
    <>
    <p className="cart-disclaimer col-sm-10">No ha seleccionado ningun producto</p>
    <Link to={`/`}>
<button className="col-sm-2 button-inicio" >Comenzar compra</button></Link> 
    </>
    }
    {cartEmpty > 0 && 
    <>
    <CartRender></CartRender>
    <Link to={`/`}>
<button className="button-inicio" >Seguir Comprando</button></Link> 
    </>
    }
    </>
)
    
}

export default Cart;