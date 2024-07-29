import '../Css/account.css';
import { useEffect } from 'react';
import { useUserContext } from '../Context/UserContext';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContexts';

const UserAccount = () => {
  const { loginWithRedirect, logout, myUser } = useUserContext();
  const { handleClearCart, setCartItems } = useCartContext();

  useEffect(() => {
    if (myUser) {
      const savedCartItems = localStorage.getItem('savedCartItemsFromAcc');
      if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
        localStorage.removeItem('savedCartItemsFromAcc');
      }
    }
  }, [myUser, setCartItems]);

  return (
    <Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => {
            handleClearCart();
            logout({ logoutParams: { returnTo: window.location.origin } });``
          }}
        >
          <span className='acc-btn-text'>Logout</span>
          <span>
            <i className='fa-solid fa-user-minus'></i>
          </span>
        </button>
      ) : (
        <button
          type='button'
          className='auth-btn'
          onClick={() => loginWithRedirect()}
        >
          <span className='acc-btn-text'>Login</span>
          <span>
            <i className='fa-solid fa-user-plus'></i>
          </span>
        </button>
      )}
    </Link>
  );
};
export default UserAccount;
