import styled from 'styled-components';
import { useCartContext } from '../Context/CartContexts';

const CartItemsCheck = () => {
  const { cartItems, totalPrice } = useCartContext();

  return (
    <Wrapper className='section'>
      <div>
        <h1 className='orders-title'>Your Orders</h1>
      </div>
      <div className='cartItems-wrapper'>
        {cartItems.map((item) => {
          return (
            <div key={item.id} className='item-wrapper'>
              <img src={item.img} className='item-img' />
              <p className='item-name'>
                {item.name} x {item.quantity}
              </p>
              <p className='item-totalPrice'>${item.price * item.quantity}</p>
            </div>
          );
        })}
        <div className='total-wrapper'>
          <p>
            <span>Total:</span> <span>${totalPrice.toFixed(2)}</span>{' '}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .orders-title {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  .item-img {
    width: 70px;
    margin-right: 2rem;
  }
  .item-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 360px;
    padding: 1rem 0;
  }
  .item-name {
    width: 100%;
    text-align: left;
  }

  .total-wrapper {
    border-top: 1px solid;
    max-width: 380px;
  }
  .total-wrapper p {
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    .orders-title {
      padding-top: 2rem;
    }
  }
`;

export default CartItemsCheck;
