import React, { useState } from 'react'

import { UnfoldLess, UnfoldMore } from '@mui/icons-material'
import { Box, Typography, useMediaQuery } from '@mui/material'

import CustomButton from '../Custom/CustomButton/CustomButton'

import FaqSectionContainer from './FaqSectionContainer'

/*
 * @name FAQ
 * @description FAQ COMPONENT WITH SIMPLE GRID LAYOUT
 * @param {Object} props COMPONENT PROPS
 * @returns {React.Component} FAQ COMPONENT
 */
const FaqSection = ({
  id = '',
  title = '',
  description = '',
  questions = [],
}) => {
  // SETTING HOOKS
  const isMobileViewport = useMediaQuery('(max-width:900px)')

  // SETTING LOCAL STATE
  const [isExpanded, setIsExpanded] = useState(false)

  // SETTING METHODS
  /**
   * @name setQuestions
   * @description METHOD TO SET QUESTIONS
   * @returns {*} QUESTIONS ARRAY
   */
  const setQuestions = () => {
    if (isMobileViewport) {
      if (isExpanded) {
        return questions
      } else {
        return [...questions].splice(0, 4)
      }
    } else {
      return questions
    }
  }

  /**
   * @name toggleFaqExpandedState
   * @description METHOD TO TOGGLE EXPANDED STATE
   * @returns {undefined} undefined
   */
  const toggleFaqExpandedState = () => setIsExpanded((prev) => !prev)

  return (
    <FaqSectionContainer id={id}>
      <Box className="faq-header">
        <Typography variant="h2" component="h2" className="faq-title">
          {title}
        </Typography>
        <Typography variant="h6" component="div" className="faq-description">
          {description}
        </Typography>
      </Box>

      <Box className="faq-grid">
        {setQuestions().map((item, index) => (
          <Box key={index} className="faq-item">
            <Box className="faq-icon">{item.icon}</Box>
            <Box className="faq-content">
              <Typography variant="body1" className="faq-question">
                {item.question}
              </Typography>
              <Typography variant="body2" className="faq-answer">
                {item.answer}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      {isMobileViewport && (
        <CustomButton
          variant="contained"
          color="primary"
          size="large"
          startIcon={isExpanded === false ? <UnfoldMore /> : <UnfoldLess />}
          fullWidth
          onClick={toggleFaqExpandedState}
        >
          Show {isExpanded === false ? 'more' : 'less'}
        </CustomButton>
      )}
    </FaqSectionContainer>
  )
}

export default FaqSection
