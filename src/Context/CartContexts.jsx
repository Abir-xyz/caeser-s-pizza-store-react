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

  // cart checkout

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

  const increaseItem = (item) => {
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
  const decreaseItem = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          );
        } else {
          return prevItems.filter((i) => i.id !== item.id);
        }
      } else {
        return prevItems;
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // total price of cartItems
  const totalPrice = cartItems.reduce((total, item) => {
    let quantity = item.quantity;
    let amount = parseFloat(item.price);
    let calculatePrice = quantity * amount;
    total += calculatePrice;
    return total;
  }, 0);

 

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
        increaseItem,
        decreaseItem,
        totalPrice,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
