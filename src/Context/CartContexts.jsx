import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react';

const CartContext = createContext();

export const CartSetup = ({ children }) => {
  const [cartEnter, setCartEnter] = useState(false);
  const [cartExit, setCartExit] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // cart open/exit
  const handleCartEnter = () => {
    setCartEnter(true);
    setCartExit(false);
  };
  const handleCartExit = () => {
    setCartExit(true);
  };
  // end of cart open/exit

  // cart functionality
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  // end of cart functionality

  return (
    <CartContext.Provider
      value={{
        cartEnter,
        setCartEnter,
        cartExit,
        setCartExit,
        handleCartEnter,
        handleCartExit,
        cartItems,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
