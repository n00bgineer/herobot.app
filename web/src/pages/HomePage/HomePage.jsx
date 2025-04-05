import Metadata from 'src/components/Metadata/Metadata'
import HeroBackgroundImageOptimised from 'src/assets/hero-background--optimised.webp'
import HeroBackgroundImage from 'src/assets/hero-background.jpg'
import AppHeader from 'src/components/AppHeader/AppHeader'
import CustomImage from 'src/components/Custom/CustomImage/CustomImage'
import HomeHeroSection from 'src/components/HomeHeroSection/HomeHeroSection'
import useScrollToHash from 'src/hooks/useScrollToHash'
import constants from 'src/state/constants.jsx'

import HomePageContainer from './HomePageContainer'
import AppFooter from '../../components/AppFooter/AppFooter'

const HomePage = () => {
  // SETTING LOCAL VARIABLES
  const { meta } = constants.page.home || {}

  // SETTING HOOKS
  useScrollToHash()

  return (
    <>
      <Metadata
        title={meta.pageTitle}
        description={meta.description}
        canonical={meta.canonical}
        og={meta.og}
        robots={meta.robots}
        twitter={meta.twitter}
      />

      <HomePageContainer>
        <AppHeader id="home" />
        <CustomImage
          src={HeroBackgroundImage}
          placeholderSrc={HeroBackgroundImageOptimised}
          alt="hero"
          className="hero-image"
        />
        <HomeHeroSection id="hero" {...constants.page.home.hero} />
        <AppFooter />
      </HomePageContainer>
    </>
  )
}

export default HomePage
