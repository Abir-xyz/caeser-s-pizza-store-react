import '../Css/account.css';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthInfo = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <section className='auth-container'>
      <div className='auth-heading'>
        <h1>account info</h1>
        {isAuthenticated ? (
          <p className='auth-success'>
            Your account is <span>connected</span>{' '}
          </p>
        ) : (
          <p className='auth-unsuccess'>
            your account isn't <span>connected</span>{' '}
          </p>
        )}
      </div>
      <div className='auth-info-container'>
        {isAuthenticated && (
          <div className='auth-info-wrapper'>
            <img src={user.picture} alt={user.name} className='auth-img' />
            <h2 className='auth-name'> {user.name}</h2>
            <p className='auth-email'> {user.email}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AuthInfo;
