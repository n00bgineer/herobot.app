import "./index.css"
import App from './App.jsx'
import env from '../env_config.js'
import LightTheme from './themes/lightTheme.js';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { Auth0Provider } from '@auth0/auth0-react';
import { CssBaseline, ThemeProvider } from '@mui/material';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={env.AUTH_DOMAIN}
        clientId={env.AUTH_CLIENT_ID}
        authorizationParams={{
          redirect_uri: env.AUTH_CALLBACK_URI,
        }}
        cacheLocation="localstorage"
        useRefreshTokens={true}
      >
      <ThemeProvider theme={LightTheme}>
        <CssBaseline />
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>,
)
