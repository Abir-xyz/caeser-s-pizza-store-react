import { useState } from 'react';
import '../Css/cart.css';
import { useCartContext } from '../Context/CartContexts';
import CartList from './CartList';

const Cart = () => {
  const { cartItems } = useCartContext();
  // cart ctrl
  const { cartEnter, cartExit, handleCartExit } = useCartContext();

  const hideCart = cartExit ? 'hide-cart' : '';
  const showCart = cartEnter ? 'show-cart' : '';

  return (
    <>
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
            <CartList items={cartItems} />
          </div>
          {cartItems.length === 0 ? (
            ''
          ) : (
            <div className='cart-footer'>
              <div className='cart-total'>
                <h3>Total</h3>
                <h3>$30</h3>
              </div>
              <div className='cart-options'>
                <a href='#' className='view-cart'>
                  Edit Cart
                </a>
                <a href='#' className='checkout'>
                  Checkout
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Cart;
