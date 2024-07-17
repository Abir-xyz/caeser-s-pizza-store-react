import '../Css/account.css';
import { useUserContext } from '../Context/UserContext';
import { Link } from 'react-router-dom';

const UserAccount = () => {
  const { loginWithRedirect, logout, myUser } = useUserContext();

  return (
    <Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => logout({ returnTo: window.location.origin })}
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
