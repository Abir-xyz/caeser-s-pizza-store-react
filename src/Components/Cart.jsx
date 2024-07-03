import { useState } from 'react';
import '../Css/cart.css';
import demo from '../pictures/pizza4.png';
import { useCartContext } from '../Context/CartContexts';

const Cart = () => {
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
            <div className='cart-item'>
              <div className='cart-img'>
                <img src={demo} className='cart-img' />
              </div>
              <div className='cart-info'>
                <div className='cart-item-name'>
                  <p>classic americano</p>
                </div>
                <div className='cart-item-quantity-wrapper'>
                  <p className='cart-item-quantity'>1 x</p>
                  <p className='cart-item-price'>$30</p>
                </div>
              </div>
              <div className='cart-item-delete'>
                <span>
                  <i className='fa-solid fa-trash'></i>
                </span>
              </div>
            </div>
          </div>
          <div className='cart-footer'>
            <div className='cart-total'>
              <h3>Total</h3>
              <h3>$30</h3>
            </div>
            <div className='cart-options'>
              <a href='#' className='view-cart'>
                View Cart
              </a>
              <a href='#' className='checkout'>
                Checkout
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
