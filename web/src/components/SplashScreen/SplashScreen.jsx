// IMPORTING PACKAGES/MODULES
import { useEffect, useState } from 'react'
import { Box, LinearProgress, Typography, } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import useStore from '../../state/store'
import AppLogoOptimised from 'src/assets/herosite-logo--optimised.webp'
import AppLogo from 'src/assets/herosite-logo.webp'
import SplashScreenContainer from './SplashScreenContainer'
import CustomImage from '../Custom/CustomImage/CustomImage'

const SplashScreen = ({ showProgress = false }) => {
  // SETTING LOCAL STATES
  const [progress, setProgress] = useState(0)
  const [loaderText, setLoaderText] = useState(null)

  // GETTING AUTH CONTEXT
  const { loading, isAuthenticated } = useAuth0()

  // GETTING GLOBAL STATES
  const { user } = useStore()

  useEffect(() => {
    if(showProgress){
      if (loading) {
        setLoaderText('Checking whether the user has logged in')
        setProgress(50)
      } else if (!isAuthenticated) {
        setLoaderText("User isn't logged in")
        setProgress(100)
      } else if (isAuthenticated && !user) {
        setLoaderText('Loading user data')
        setProgress(75)
      } else if (user) {
        setLoaderText('User data loaded')
        setProgress(100)
      }
    }
  }, [loading, isAuthenticated, user, showProgress])

  return (
    <SplashScreenContainer className="splash-modal">
      <Box className="splash-modal-content-container">
        <Box className="app-logo-container">
          <CustomImage
            src={AppLogo}
            placeholderSrc={AppLogoOptimised}
            alt="App logo"
            className="app-logo-medium"
          />
          <Typography variant="h3" className="app-name">
            HeroBot
          </Typography>
        </Box>
        {
          showProgress &&
          <>
            <LinearProgress variant="determinate" value={progress} />
            <Typography variant="body2" color="grey" className="splash-loader-text">
              {loaderText}
            </Typography>
          </>
        }
      </Box>
    </SplashScreenContainer>
  )
}

export default SplashScreen
