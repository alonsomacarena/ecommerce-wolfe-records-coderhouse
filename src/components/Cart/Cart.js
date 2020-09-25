import React from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from './CartContext.js';
import './Cart.css';


function CartRender (){

const {cartArray, price, cleanCart} = useCartContext();

return(
    <>
    <div className="container-list-cart col-sm-12">
        <ul className="cart-list col-sm-10">
        {cartArray.map((item => 
        <li className="cart-item col-sm-12">
        <p className="cart-item-quantity-number">{item.quantity}</p>
        <p className="cart-item-album">{item.album}</p>
        <p className="cart-item-artist">{item.artist}</p>
            <p className="cart-item-price">$ {item.price} </p>
            <button type="button" className=" delete-button">
                <i className="fas fa-trash-alt"/> {cleanCart()}
                </button>
        </li>))}
        <p className="total-cart col-sm-12">Total $ {price()}</p>   
        </ul>
    </div>    
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