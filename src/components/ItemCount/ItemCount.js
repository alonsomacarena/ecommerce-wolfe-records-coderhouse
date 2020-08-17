import React, {useState } from 'react';
import './ItemCount.css';

const ItemCount = ({initial, min, max}) =>{

    const [count, setCount]= useState(initial);

    function add(){
        if(count < max ){
            setCount(count + 1)
        }
    };

    function substract(){
        if(count > min){
            setCount (count - 1)
        }
    };
    
    return(
<div className="container-total col-sm-3">
        <div className="container-itemCount">
        <h5 className="title-itemCount">Producto 1</h5>
        <div className="button-container">
            <button className="button-icon" disabled={count < min} onClick={substract}>-</button>
            <p className="quantity-item">{count}</p>
            <button className="button-icon" disabled={count === max} onClick={add}>+</button>  
        </div>
        <p className="msj-quantity">{count === max ? "*Ha llegado al máximo de productos disponibles" 
: "*Quedan" + " " + (max -  count) + " " + "productos disponibles"}</p>
        </div>
        <button className="button-addToCart" disabled={count > max || count < min}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;