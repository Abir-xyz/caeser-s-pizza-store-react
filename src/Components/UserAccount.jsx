import { useEffect } from 'react';
import { useUserContext } from '../Context/UserContext';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContexts';
import styled from 'styled-components';

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
    <Wrapper className='section'>
      <Link>
        {myUser ? (
          <button
            type='button'
            className='auth-btn'
            onClick={() => {
              handleClearCart();
              logout({ logoutParams: { returnTo: window.location.origin } });
              ``;
            }}
          >
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
            <span>
              <i className='fa-solid fa-user-plus'></i>
            </span>
          </button>
        )}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .auth-btn {
    background: none;
    border: none;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

export default UserAccount;
