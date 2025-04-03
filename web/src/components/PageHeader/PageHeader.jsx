import { Box, Typography } from '@mui/material'

import PageHeaderContainer from './PageHeaderContainer'

const PageHeader = ({ title = '', description = '', children }) => {
  return (
    <PageHeaderContainer>
      {(title || description) && (
        <Box className="title-container">
          {title && (
            <Typography variant="h5" className="title">
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="body2" className="description">
              {description}
            </Typography>
          )}
        </Box>
      )}
      {children && <Box className="children-container">{children}</Box>}
    </PageHeaderContainer>
  )
}

export default PageHeader
