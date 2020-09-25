import React from 'react';
import './ItemDetail.css';
import {Link} from 'react-router-dom';
import { useCartContext } from '../Cart/CartContext';



export default function ButtonShop({quantity, item}){
 
    const {addItemCart}= useCartContext();

    return(
        <Link to={`/cart`}> 
        <button className="button-addToCart" disabled={quantity === 0} onClick={() => addItemCart({...item, quantity})} >Agregar al Carrito ({quantity})</button>
        </Link>
    )
}