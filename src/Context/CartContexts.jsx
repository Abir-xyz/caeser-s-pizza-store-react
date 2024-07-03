import { Children, createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartSetup = ({ children }) => {
  const [cartEnter, setCartEnter] = useState(false);
  const [cartExit, setCartExit] = useState(false);

  const handleCartEnter = () => {
    setCartEnter(true);
    setCartExit(false);
  };

  const handleCartExit = () => {
    setCartExit(true);
  };

  return (
    <CartContext.Provider
      value={{
        cartEnter,
        setCartEnter,
        cartExit,
        setCartExit,
        handleCartEnter,
        handleCartExit,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
