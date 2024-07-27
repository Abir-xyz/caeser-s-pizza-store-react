import '../Css/cartList.css';
import { useCartContext } from '../Context/CartContexts';

const CartList = ({ items }) => {
  const { cartItems, removeItemFromCart } = useCartContext();

  return (
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
                        <p className='cart-item-quantity'>{item.quantity} x</p>
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
  );
};
export default CartList;
