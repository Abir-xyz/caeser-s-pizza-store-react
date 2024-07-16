import '../Css/account.css';
import { useUserContext } from '../Context/UserContext';

const UserAccount = () => {
  const { loginWithRedirect, logout, myUser } = useUserContext();

  return (
    <a>
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
    </a>
  );
};
export default UserAccount;
