import "./index.css"
import App from './App.jsx'
import env_config from '../env_config.js'
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
        domain={env_config.AUTH0_DOMAIN}
        clientId={env_config.AUTH0_CLIENT_ID}
        authorizationParams={{
          audience: env_config.AUTH0_AUDIENCE,
          redirect_uri: env_config.AUTH0_REDIRECT_URI,
          scope: 'openid profile email offline_access',
        }}
        cacheLocation="localstorage"
        useRefreshTokens={true}
        useRefreshTokensFallback={true}
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
