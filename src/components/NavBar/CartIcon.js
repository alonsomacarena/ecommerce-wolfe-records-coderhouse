import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import { useCartContext } from '../Cart/CartContext';

function CartIcon () {

const {totals,size} = useCartContext();

   return (   
        <>   
        <Link to={`/cart`}>  
    <i id="cd-cart-trigger"><a className="fas fa-shopping-cart nav-link cd-img-replace" >
   {totals === 0 && <span style={{display:"flex", flexFlow:"row"}}></span>}
   {totals > 0 && <span style={{display:"flex", flexFlow:"row"}} onChange={size()}>{totals}</span>}
    </a></i>
    </Link>
    </>
    );
}

export default CartIcon;