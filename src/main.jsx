import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartSetup } from './Context/CartContexts.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './Context/UserContext.jsx';

// auth
// dev-klpldjkxsq63rpc8.us.auth0.com
// MbVbrz6liwtIGT0EthcMcrDYitPHoAr3

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-klpldjkxsq63rpc8.us.auth0.com'
      clientId='MbVbrz6liwtIGT0EthcMcrDYitPHoAr3'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation='localstorage'
    >
      <UserProvider>
        <CartSetup>
          <App />
        </CartSetup>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
