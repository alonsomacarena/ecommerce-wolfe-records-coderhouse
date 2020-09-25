import React, { useState, useContext } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ initialValue = [], children}) {
  const [cartArray, setCartArray] = useState(initialValue);
  const [totals, setTotals]= useState(0);
  const [cartEmpty, setCartEmpty]= useState (0);

  function addItemCart(item) {
    const itemSelected = [...cartArray, item];
    const total = totals + item.quantity;
    const cartFull = cartEmpty + item.quantity;
    setTotals(total);
    setCartArray(itemSelected);
    setCartEmpty(cartFull);
  }

  function size() {
    return cartArray.reduce((prev, next) => prev + (0 + next.quantity), 0);
  }

  function cleanCart(removeItem) {
    const itemsFiltered = cartArray.filter(item => item.artist !== removeItem.artist
      );
    setCartArray(itemsFiltered);
  }

  function price(item) {
    return cartArray.reduce((prev, next) => prev + next.quantity * next.price, 0);
  }


  return (
    <CartContext.Provider value={{ cartArray, addItemCart, initialValue, totals, cartEmpty, price, size, cleanCart}}>
      {children}
    </CartContext.Provider>
  );
}

