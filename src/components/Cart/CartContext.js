import React, { useState, useContext } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ initialValue = [], children}) {
  const [cartArray, setCartArray] = useState(initialValue);
  const [totals, setTotals]= useState(0);
  const [cartEmpty, setCartEmpty]= useState (0);

  function addItemCart(item) {
      const itemSelected = [...cartArray, item];
      const total= totals + item.quantity;
      const cartFull = cartEmpty + item.quantity;
      setTotals(total)
      setCartArray(itemSelected);
      setCartEmpty(cartFull)
  }


  return (
    <CartContext.Provider value={{ cartArray, addItemCart, initialValue, totals, cartEmpty}}>
      {children}
    </CartContext.Provider>
  );
}

