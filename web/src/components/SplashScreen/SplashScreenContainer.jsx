import { Box, styled } from "@mui/material";

const SplashScreenContainer = styled(Box)(({ theme }) => ({
  '&.MuiBox-root.splash-modal': {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    position: "relative",
    zIndex: "2000",

    '&> .splash-modal-content-container': {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minWidth: '20%',
    },
    '& .splash-modal-content-container > .logo': {
      height: '100px',
      marginBottom: '15px',
    },
    '& .splash-loader-text': {
      marginTop: '10px',
    },
    '& .MuiLinearProgress-root': {
      minWidth: '200px',
      borderRadius: '9999px',
    },
  },
}))

export default SplashScreenContainer;