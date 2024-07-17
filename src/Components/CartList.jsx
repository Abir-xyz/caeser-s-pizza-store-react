import '../Css/cartList.css';
import { json } from 'react-router';
import demo from '../pictures/pizza4.png';
import { useEffect } from 'react';

const CartList = ({ items }) => {
  return (
    <div className='cart-item'>
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
                    {/* <p className='cart-item-quantity'>1 x</p> */}
                    <p className='cart-item-price'>{item.price}</p>
                  </div>
                </div>
                <div className='cart-item-delete'>
                  <span>
                    <i className='fa-solid fa-trash'></i>
                  </span>
                </div>
              </div>
            </article>
          );
        })}
    </div>
  );
};
export default CartList;
