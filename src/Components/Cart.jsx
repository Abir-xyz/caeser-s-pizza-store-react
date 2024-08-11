import { useState } from 'react';
import { useCartContext } from '../Context/CartContexts';
import CartList from './CartList';
import styled from 'styled-components';

const Cart = () => {
  const { cartItems } = useCartContext();
  // cart ctrl
  const { cartEnter, cartExit, handleCartExit } = useCartContext();
  const [editCart, setEditCart] = useState(false);

  const hideCart = cartExit ? 'hide-cart' : '';
  const showCart = cartEnter ? 'show-cart' : '';

  const totalPrice = cartItems.reduce((total, item) => {
    let quantity = item.quantity;
    let amount = parseFloat(item.price);
    let calculatePrice = quantity * amount;
    total += calculatePrice;
    return total;
  }, 0);

  const handleEditCart = () => {
    setEditCart(!editCart);
  };

  return (
    <>
      <Wrapper className='section'>
        <section className={`cart-container ${showCart} ${hideCart}`}>
          <div className='cart-center'>
            <div className='cart-header'>
              <div className='cart-header-title'>
                <h1>Cart</h1>
              </div>
              <div className={`cart-exit`} onClick={handleCartExit}>
                <span>
                  <i className='fa-regular fa-circle-xmark'></i>
                </span>
              </div>
            </div>
            <div className='cart-content'>
              <CartList items={cartItems} editCart={editCart} />
            </div>
            {cartItems.length === 0 ? (
              ''
            ) : (
              <div className='cart-footer'>
                <div className='cart-total'>
                  <h3>Total</h3>
                  <h3 className='cart_total'>${totalPrice.toFixed(2)}</h3>
                </div>
                <div className='cart-options'>
                  <button className='view-cart' onClick={handleEditCart}>
                    {editCart ? 'Done' : 'Edit Cart'}
                  </button>
                  <a href='#' className='checkout'>
                    Checkout
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .cart-container {
    min-height: 100vh;
    width: 380px;
    /* background-color: #fff; */
    background-color: #fcfcfc;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }

  .cart-center {
    position: relative;
    height: 100vh;
  }

  .show-cart {
    transform: translateX(0%);
  }

  .hide-cart {
    transform: translateX(100%);
  }

  .cart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #c7c7c7;
  }

  .cart-header-title h1 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .cart-exit span i {
    font-size: 1.4rem;
    cursor: pointer;
  }

  .cart-exit:hover {
    color: red;
  }

  .cart-content {
    height: 80vh;
    overflow-y: scroll !important;
    padding-bottom: 20px;
    z-index: 0 !important;
  }

  /* ------- cart footer ------ */

  .cart-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 1 !important;
    margin-bottom: 10px;
  }

  .cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
    padding: 16px;
    border-top: 1px solid #c7c7c7;
  }

  .cart-total h3 {
    font-weight: 500;
  }

  .cart-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  .view-cart {
    background-color: var(--themeClr);
    color: var(--clrWhite);
    padding: 8px 12px;
    border: none;
    border-radius: 10rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-size: 1.1rem;
  }

  .view-cart:hover {
    background-color: rgb(184, 119, 0);
  }

  .checkout {
    color: var(--clrWhite);
    background-color: rgb(192, 21, 21);
    padding: 8px 12px;
    border-radius: 10rem;
    transition: all 0.3s ease-in-out;
  }

  .checkout:hover {
    background-color: #6e0a0a;
  }

  /* content */
`;

export default Cart;
