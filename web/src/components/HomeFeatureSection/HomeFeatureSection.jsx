import { useState } from 'react'

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import CustomButton from '../Custom/CustomButton/CustomButton'
import CustomTab from '../Custom/CustomTab/CustomTab'
import CustomTabs from '../Custom/CustomTabs/CustomTabs'
import ReportCard from '../ReportCard/ReportCard'

import HomeFeatureSectionContainer from './HomeFeatureSectionContainer'
import { Link } from 'react-router'

/*
 * @name HomeFeatureSection
 * @description SECTION COMPONENT TO DISPLAY HOME VALUE FEATURES WITH DESKTOP-ONLY HOVER TRACKING
 * @param {string} id SECTION ID
 * @param {string} title SECTION TITLE
 * @param {string} description SECTION DESCRIPTION
 * @param {Object} plans PRICING PLANS DATA
 * @param {Object} reportCard REPORT CARD DATA
 * @returns {React.Component} HOME VALUE SECTION COMPONENT
 */
const HomeFeatureSection = ({
  id = '',
  title = '',
  description = '',
  plans = {},
  reportCard = {},
}) => {
  // SETTING LOCAL VARIABLES
  const { basic, premium } = plans || {}

  // SETTING LOCAL STATE
  const [tabValue, setTabValue] = useState(0)

  /*
   * @name handleTabChange
   * @description METHOD TO SET TAB VALUE
   * @param {*} event EVENT OBJECT
   * @param {number} value TAB INDEX VALUE
   * @returns {undefined}
   */
  const handleTabChange = (event, value) => setTabValue(value)

  /*
   * @name renderPlanContent
   * @description METHOD TO RENDER PLAN CONTENT
   * @param {Object} plan PLAN DATA
   * @returns {React.Component} PLAN CONTENT COMPONENT
   */
  const renderPlanContent = ({
    price,
    ctaIcon,
    ctaText,
    ctaLink,
    features,
    tabTitle,
    description,
    priceDescription,
    additionalPricingNote,
  }) => (
    <Box className="plan-content">
      <Box className="pricing-section">
        <Typography variant="h2" component="div" className="price">
          {price}
        </Typography>
        <Typography variant="body1" className="plan-description">
          {description}
        </Typography>
        <Typography variant="body2" className="price-description">
          {priceDescription}
        </Typography>
        {additionalPricingNote && (
          <Typography variant="body3" className="additional-note">
            {additionalPricingNote}
          </Typography>
        )}
      </Box>

      <CustomButton
        variant="contained"
        color="primary"
        fullWidth
        className="plan-cta"
        size="medium"
        component={Link}
        to={{ pathname: ctaLink }}
        startIcon={ctaIcon}
        disabled={tabTitle.toUpperCase() === 'PREMIUM'}
      >
        {ctaText}
      </CustomButton>

      <List className="features-list" disablePadding={true}>
        {features.map((feature, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon>{feature.icon}</ListItemIcon>
            <ListItemText primary={feature.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <HomeFeatureSectionContainer id={id}>
      <Box className="feature-description-container">
        <Box className="header">
          <Typography variant="h2" component="h2" className="title">
            {title}
          </Typography>
          <Typography variant="body1" component="div" className="description">
            {description}
          </Typography>
        </Box>
        <CustomTabs
          variant="fullWidth"
          value={tabValue}
          onChange={handleTabChange}
        >
          <CustomTab label={basic?.tabTitle} size="large" icon={basic?.icon} />
          <CustomTab
            label={premium?.tabTitle}
            size="large"
            icon={premium?.icon}
          />
        </CustomTabs>

        {tabValue === 0 && renderPlanContent(basic)}
        {tabValue === 1 && renderPlanContent(premium)}
      </Box>
      <Box className="report-card-container">
        <Box className="report-card-container-all">
          <ReportCard {...reportCard} />
        </Box>
      </Box>
    </HomeFeatureSectionContainer>
  )
}

export default HomeFeatureSection
