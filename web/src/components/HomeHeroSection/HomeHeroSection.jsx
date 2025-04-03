
import { Box, Typography } from '@mui/material'

import HomeHeroSectionContainer from './HomeHeroSectionContainer'

const HomeHeroSection = ({
  id = '',
  title = '',
  description = '',
}) => {
  
  return (
    <HomeHeroSectionContainer id={id}>
      <Box className="hero-container">
        <Box className="hero-txt">
          <Typography variant="h1" className="title app-name">
            {title}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            className="description"
            color="default "
          >
            {description}
          </Typography>
        </Box>

      </Box>
    </HomeHeroSectionContainer>
  )
}

export default HomeHeroSection
