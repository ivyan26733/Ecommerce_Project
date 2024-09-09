import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AppProvider}  from './context/ProductContext.jsx'
import {FilterContextProvider} from './context/FilterContext.jsx'
import { Cart_context } from './context/cart_context.jsx'
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Auth0Provider
    domain="dev-kwlclkm0f1bmmngv.us.auth0.com"
    clientId="Iu0aPoOfAJPAA5ZGgoz249fljgwe2nZ3"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
       <AppProvider>
      <FilterContextProvider> 
        <Cart_context>
          <App />
      </Cart_context>
      </FilterContextProvider>
    </AppProvider>
     </Auth0Provider>
  // </StrictMode>,
)
