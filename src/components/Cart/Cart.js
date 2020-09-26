import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from './CartContext.js';
import './Cart.css';
import Checkout from '../Checkout/Checkout';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../../firebase';

function Cart (){

const {cartArray, price, cleanCart, cartEmpty} = useCartContext();
const [checkout, setCheckout] = useState(false);
const [userInfo, setUserInfo]= useState(null);
const [orderId, setOrderId]= useState(null);

function updateUserInfo(userInfo){
    setUserInfo(userInfo)
}

async function createOrder(){
    const db = getFirestore();
    const orders = db.collection('orders');

    const newOrder = {
        buyer: userInfo,
        items: cartArray.map(item =>({id: item.id, qty:item.quantity, itemPrice: item.price, artist:item.artist, album:item.album})),
        date: firebase.firestore.FieldValue.serverTimestamp(),
        total: price(),
    }

    try {
        const {id}= await orders.add(newOrder);
        setOrderId(id)
    //corrobora que guarde el id de la nueva orden
    console.log('id', id);
    } catch(err){
        //se setea feedback para el user
        console.log('error')
    }}


function CartRender (){

return(
    <>
    <div className="container-list-cart col-sm-12">
        <ul className="cart-list col-sm-10">
        {cartArray.map((item => 
        <li className="cart-item col-sm-12" key={item.id}>
        <p className="cart-item-quantity-number">{item.quantity}</p>
        <p className="cart-item-album">{item.album}</p>
        <p className="cart-item-artist">{item.artist}</p>
            <p className="cart-item-price">$ {item.price} </p>
            <button type="button" className=" delete-button"  onClick={() => cleanCart(item)}>
                <i className="fas fa-trash-alt"/>
                </button>
        </li>))}
        <p className="total-cart col-sm-12">Total $ {price()}</p>   
        </ul>
    </div>    
    </>
    )
}


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
    <div className="d-flex flex-row-reverse mt-3">
        {!checkout ?
        (<button type="button" className="button-checkout"
        onClick={()=> {setCheckout(true);}}>
            Comprar</button>):
            (<button type="button" className="button-checkout"
            onClick={()=> {setCheckout(false);}}>
                Cambiar mi orden</button>)}
        </div>
    </>
    }
    {cartEmpty > 0 && checkout &&
    <>
    <Checkout onChange={updateUserInfo} ></Checkout>
    <div className="d-flex flex-row-reverse mt-3">
    <button type="button" className="button-checkout"
    disabled={!userInfo} onClick={createOrder}>
            Finalizar compra</button>        
    </div>   
    </>
    }
    {checkout && orderId && <p style={{color:"white"}} >Tu numero de orden es: {orderId}</p>}
    </>
)
    
}

export default Cart;