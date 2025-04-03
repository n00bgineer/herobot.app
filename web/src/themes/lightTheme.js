import { createTheme } from '@mui/material'

// LIGHT THEME
const LightTheme = createTheme({
  shape: {
    borderRadius: '16px',
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      dark: '#000000',
      50: 'rgba(0, 0, 0, 0.05)',
      100: 'rgba(0, 0, 0, 0.1)',
      200: 'rgba(0, 0, 0, 0.2)',
      300: 'rgba(0, 0, 0, 0.3)',
      400: 'rgba(0, 0, 0, 0.4)',
      500: 'rgba(0, 0, 0, 0.5)',
      600: 'rgba(0, 0, 0, 0.6)',
      700: 'rgba(0, 0, 0, 0.7)',
      800: 'rgba(0, 0, 0, 0.8)',
      900: 'rgba(0, 0, 0, 0.9)',
      contrastText: '#E0E0E0',
    },
    secondary: {
      main: '#E0E0E0',
      dark: '#BDBDBD',
      50: 'rgba(224, 224, 224, 0.05)',
      100: 'rgba(224, 224, 224, 0.1)',
      200: 'rgba(224, 224, 224, 0.2)',
      300: 'rgba(224, 224, 224, 0.3)',
      400: 'rgba(224, 224, 224, 0.4)',
      500: 'rgba(224, 224, 224, 0.5)',
      600: 'rgba(224, 224, 224, 0.6)',
      700: 'rgba(224, 224, 224, 0.7)',
      800: 'rgba(224, 224, 224, 0.8)',
      900: 'rgba(224, 224, 224, 0.9)',
      contrastText: '#000',
    },
    grey: {
      main: '#616161',
      dark: '#212121',
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    info: {
      main: 'rgba(2,136,209,1)',
      dark: '#01579b',
      50: 'rgba(2,136,209,0.05)',
      100: 'rgba(2,136,209,0.1)',
      200: 'rgba(2,136,209,0.2)',
      300: 'rgba(2,136,209,0.3)',
      400: 'rgba(2,136,209,0.4)',
      500: 'rgba(2,136,209,0.5)',
      600: 'rgba(2,136,209,0.6)',
      700: 'rgba(2,136,209,0.7)',
      800: 'rgba(2,136,209,0.8)',
      900: 'rgba(2,136,209,0.9)',
    },
    warning: {
      main: 'rgba(237,108,2,1)',
      dark: '#e65100',
      50: 'rgba(237,108,2,0.05)',
      100: 'rgba(237,108,2,0.1)',
      200: 'rgba(237,108,2,0.2)',
      300: 'rgba(237,108,2,0.3)',
      400: 'rgba(237,108,2,0.4)',
      500: 'rgba(237,108,2,0.5)',
      600: 'rgba(237,108,2,0.6)',
      700: 'rgba(237,108,2,0.7)',
      800: 'rgba(237,108,2,0.8)',
      900: 'rgba(237,108,2,0.9)',
    },
    error: {
      main: 'rgba(211,47,47,1)',
      dark: '#c62828',
      50: 'rgba(211,47,47,0.05)',
      100: 'rgba(211,47,47,0.1)',
      200: 'rgba(211,47,47,0.2)',
      300: 'rgba(211,47,47,0.3)',
      400: 'rgba(211,47,47,0.4)',
      500: 'rgba(211,47,47,0.5)',
      600: 'rgba(211,47,47,0.6)',
      700: 'rgba(211,47,47,0.7)',
      800: 'rgba(211,47,47,0.8)',
      900: 'rgba(211,47,47,0.9)',
    },
    success: {
      main: 'rgba(76,175,80,1)',
      dark: '#388e3c',
      50: 'rgba(76,175,80,0.05)',
      100: 'rgba(76,175,80,0.1)',
      200: 'rgba(76,175,80,0.2)',
      300: 'rgba(76,175,80,0.3)',
      400: 'rgba(76,175,80,0.4)',
      500: 'rgba(76,175,80,0.5)',
      600: 'rgba(76,175,80,0.6)',
      700: 'rgba(76,175,80,0.7)',
      800: 'rgba(76,175,80,0.8)',
      900: 'rgba(76,175,80,0.9)',
    },
    background: {
      paper: '#FFF',
      default: '#FFF',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    fontSize: 16,
    custom: {
      fontFamily: '"Rowdies", sans-serif',
    },
    h1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '2.5rem', // ~40px
      marginBlock: 'unset',
      lineHeight: 'unset',
      '@media (max-width:900px)': {
        fontSize: '2.25rem', // ~36px
      },
      '@media (max-width:600px)': {
        fontSize: '2rem', // ~32px
      },
    },
    h2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '2.25rem', // ~36px
      marginBlock: 'unset',
      lineHeight: 'unset',
      '@media (max-width:900px)': {
        fontSize: '2rem', // ~32px
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem', // ~28px
      },
    },
    h3: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '2rem', // ~32px
      marginBlock: 'unset',
      lineHeight: 'unset',
      '@media (max-width:900px)': {
        fontSize: '1.75rem', // ~28px
      },
      '@media (max-width:600px)': {
        fontSize: '1.5rem', // ~24px
      },
    },
    h4: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1.75rem', // ~28px
      marginBlock: 'unset',
      lineHeight: 'unset',
      '@media (max-width:900px)': {
        fontSize: '1.5rem', // ~24px
      },
      '@media (max-width:600px)': {
        fontSize: '1.25rem', // ~20px
      },
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1.5rem', // ~24px
      marginBlock: 'unset',
      lineHeight: 'unset',
      '@media (max-width:900px)': {
        fontSize: '1.25rem', // ~20px
      },
      '@media (max-width:600px)': {
        fontSize: '1.125rem', // ~18px
      },
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1.25rem', // ~20px
      marginBlock: 'unset',
      lineHeight: 'unset',
      '@media (max-width:900px)': {
        fontSize: '1.125rem', // ~18px
      },
      '@media (max-width:600px)': {
        fontSize: '1rem', // ~16px
      },
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem', // ~16px
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem', // ~14px
    },
    body3: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.75rem', // ~12px
    },
  },
})

export default LightTheme
