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

  const handleClearCart = () => {
    localStorage.setItem('savedCartItemsFromAcc', JSON.stringify(cartItems));
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  // cart functionality
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
        removeItemFromCart,
        handleClearCart,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
