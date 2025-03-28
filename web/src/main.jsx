import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        onRedirectCallback={(appState)=>{console.log(appState)}}
        cacheLocation="localstorage"
        useRefreshTokens={true}
      >
      <App />
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>,
)
