import { forwardRef } from 'react'

import CustomTextFieldContainer from './CustomTextFieldContainer'

const CustomTextField = forwardRef(function CustomTextField(
  { size = 'medium', className, ...props },
  ref
) {
  // SETTING VARIABLES
  let sizeClass = 'MuiTextField-sizeMedium'
  if (size === 'small') {
    sizeClass = 'MuiTextField-sizeSmall'
  } else if (size === 'large') {
    sizeClass = 'MuiTextField-sizeLarge'
  }

  return (
    <CustomTextFieldContainer
      ref={ref}
      className={[sizeClass, className].join(' ')}
      {...props}
    />
  )
})

export default CustomTextField
