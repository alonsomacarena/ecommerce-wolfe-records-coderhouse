import React from 'react';
import {Link} from 'react-router-dom';
import { useCartContext } from '../Cart/CartContext';

function CartIcon () {

const {totals,size} = useCartContext();

   return (   
        <>   
        <Link to={`/cart`}>  
    <i id="cd-cart-trigger"><button className="fas fa-shopping-cart nav-link cd-img-replace" style={{border:"none", backgroundColor:"transparent", textTransform:"uppercase"}} >
   {totals === 0 && <span style={{display:"flex", flexFlow:"row"}}></span>}
   {totals > 0 && <span style={{display:"flex", flexFlow:"row"}} onChange={size()}>{totals}</span>}
    </button></i>
    </Link>
    </>
    );
}

export default CartIcon;