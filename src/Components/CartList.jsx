import { useCartContext } from '../Context/CartContexts';
import styled from 'styled-components';

const CartList = ({ items }) => {
  const { cartItems, removeItemFromCart } = useCartContext();

  return (
    <Wrapper className='section'>
      <div className='cart-item'>
        {cartItems.length === 0 ? (
          <p className='cart-warning'>your cart is empty</p>
        ) : (
          <div className='cartlist-header'>
            {items &&
              items.map((item) => {
                return (
                  <article className='cart-article' key={item.id}>
                    <div className='inner-cart-article'>
                      <div className='cart-img'>
                        <img src={item.img} className='cart-img' />
                      </div>
                      <div className='cart-info'>
                        <div className='cart-item-name'>
                          <p>{item.name}</p>
                        </div>
                        <div className='cart-item-quantity-wrapper'>
                          <p className='cart-item-quantity'>
                            {item.quantity} x
                          </p>
                          <p className='cart-item-price'>${item.price}</p>
                        </div>
                      </div>
                      <div
                        className='cart-item-delete cart-deleteBtn'
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        <span>
                          <i className='fa-solid fa-trash'></i>
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cart-article {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 10px 0;
    /* border-bottom: 1px solid #ebebeb; */
    padding-bottom: 10px;
  }

  .inner-cart-article {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  .cart-img {
    height: 60px;
    width: 60px;
  }

  .cart-item-quantity-wrapper {
    display: flex;
    align-items: center;
  }

  .cart-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px 0;
    width: 100%;
  }

  .cart-item-delete:hover {
    color: rgb(206, 0, 0);
    cursor: pointer;
  }

  .cart-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cartlist-header {
    width: 100%;
  }

  .cart-warning {
    text-transform: capitalize;
    font-size: 1.1rem;
    text-align: center;
  }
`;

export default CartList;
