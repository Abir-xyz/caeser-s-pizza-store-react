import Nav from '../Components/SubNav';
import Cart from '../Components/Cart';
import Footer from '../Components/Footer';
import Location from '../Components/Location';
import CheckoutForm from '../Components/CheckoutForm';
import CartItemsCheck from '../Components/CartItemsCheck';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useCartContext } from '../Context/CartContexts';

const CheckOut = () => {
  const { cartItems } = useCartContext();

  useEffect(() => {
    window.onload = function () {
      document.getElementById('form').reset();
    };
  }, []);

  // send data
  const serializedCartItems = cartItems.map((item) => {
    return [`${item.name} x ${item.quantity}`];
  });

  return (
    <Wrapper className='section'>
      <div>
        <Nav />
      </div>
      <div>
        <Location
          title='Checkout'
          desc='Stripe processes payments securely, seamlessly.'
        />
      </div>
      <section className='checkout-container'>
        <form
          action='https://api.web3forms.com/submit'
          method='POST'
          className='main-form'
          id='form'
        >
          <input
            type='hidden'
            name='access_key'
            value='3fe1639b-a9af-4450-b865-e75653124c43'
          ></input>
          <input
            type='hidden'
            name='redirect'
            value='http://localhost:5173/payment'
          ></input>
          <input type='hidden' name='Orders' value={serializedCartItems} />
          <div className='checkout-center'>
            <div className='checkout-wrap wrap-1'>
              <CheckoutForm />
            </div>
            <div className='checkout-wrap wrap-2'>
              <CartItemsCheck />
              <div className='btn-wrapper'>
                <button type='submit' className='btn'>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <div>
        <Footer />
      </div>
      <div>
        <Cart />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .checkout-container {
    min-height: 100vh;
    max-width: 80vw;
    margin: 0 auto;
    padding-top: 3rem;
  }

  .orders {
    display: none;
  }

  .btn-wrapper {
    margin: 2rem 0;
  }

  .btn {
    font-size: 1.1rem;
    background: var(--themeClr);
    color: #fff;
    border: none;
    outline: none;
    padding: 10px 16px;
    border-radius: 10rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .btn:hover {
    background-color: #b68221;
  }

  @media screen and (min-width: 768px) {
    .checkout-center {
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
    }
    /* .checkout-wrap {
      flex: 0 0 calc(50% - 20px);
    } */
    .wrap-1 {
      flex: 0 0 calc(60% - 50px);
    }
    .wrap-2 {
      flex: 0 0 40%;
    }
  }
`;

export default CheckOut;
