import React, {useState, useEffect } from 'react';
import './ItemCount.css';


export default function ItemCount({initial, min, max, onAdd, onChange}){

    const [count, setCount]= useState(initial);
    const addValue = () => setCount(count + onAdd);
    const reduceValue = () => setCount(count - onAdd);

    useEffect(() => onChange(count));

    return(
        <>
<div className="container-total">
        <div className="button-container">
            <button className="button-icon" disabled={count < min} onClick={reduceValue}>-</button>
            <p className="quantity-item">{count}</p>
            <button className="button-icon" disabled={count >= max} onClick={addValue}>+</button>  
        </div>
        <p className="msj-quantity">{count === max ? "*No quedan más productos disponibles" 
: "*Quedan " + (max -  count) + " productos disponibles"}</p>
        </div>
   </>     
    )
}
