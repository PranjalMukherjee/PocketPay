import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { REDIRECT_URL } from './utils/urls';
import { TransactionContextProvider } from './context/TransactionContext';
import { SignUpContextProvider } from './context/CountryContext';
import { UserBusinessDetailsContextProvider } from './context/UserBusinessDetailsContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN!}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
        authorizationParams={{
          redirect_uri: REDIRECT_URL
        }}>
        <TransactionContextProvider>
          <SignUpContextProvider>
            <UserBusinessDetailsContextProvider>
              <App />
            </UserBusinessDetailsContextProvider>
          </SignUpContextProvider>
        </TransactionContextProvider>
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);
