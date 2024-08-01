import styled from 'styled-components';
import { useCartContext } from '../Context/CartContexts';
import { useState } from 'react';

const OrderButtons = ({ item }) => {
  const [clickedButtons, setClickedButtons] = useState({});
  const { handleCartEnter } = useCartContext();
  const { addItemToCart } = useCartContext();

  const handleToggle = (id) => {
    setClickedButtons((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Wrapper className='section'>
      <div>
        {clickedButtons[item.id] ? (
          <button
            className='slider-btn view-carts'
            onClick={() => {
              handleToggle(item.id);
              handleCartEnter();
            }}
          >
            View Cart
          </button>
        ) : (
          <button
            className='slider-btn'
            onClick={() => {
              handleToggle(item.id);
              addItemToCart(item);
            }}
          >
            Order Now
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .slider-btn {
    background: none;
    border: none;
    font-size: 1.1rem;
    text-transform: capitalize;
    font-weight: 500;
    cursor: pointer;
    background-color: var(--themeClr);
    color: #fff;
    padding: 8px 12px;
    border-radius: 10rem;
    transition: all 0.3s ease-in-out;
  }
  .slider-btn:hover {
    background-color: red;
  }
  .view-carts {
    background-color: red !important;
  }
`;

export default OrderButtons;
