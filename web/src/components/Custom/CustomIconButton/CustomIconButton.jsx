import React from 'react'

import CustomIconButtonContainer from './CustomIconButtonContainer'

const CustomIconButton = ({ className, color = 'primary', ...props }) => {
  let iconButtonClasses = [className || ''].join('')

  return (
    <CustomIconButtonContainer
      {...props}
      color={color}
      className={iconButtonClasses}
    />
  )
}

export default CustomIconButton
