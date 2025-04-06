// IMPORTING PACKAGES/MODULES
import { useEffect, useState } from 'react'
import { Box, Typography, } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import useStore from '../../state/store'

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
        <img
          src="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
          alt="Tracepath logo"
          className="logo"
          loading="lazy"
        />
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
