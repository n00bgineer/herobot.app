import CustomAlertContainer from './CustomAlertContainer'

const CustomAlert = ({ size, fullWidth, className, ...props }) => {
  // SETTING LOCAL VARIABLES
  // SETTING SIZE CLASS
  let sizeClass = 'MuiAlert-medium'
  if (size === 'small') sizeClass = 'MuiAlert-small'
  else if (size === 'large') sizeClass = 'MuiAlert-large'

  // SETTING FULLWIDTH CLASS
  let fullWidthClass = ''
  if (fullWidth) fullWidthClass = 'MuiAlert-fullwidth'

  return (
    <CustomAlertContainer
      variant="filled"
      {...props}
      className={`${className || ''} ${fullWidthClass} ${sizeClass}`}
    />
  )
}
export default CustomAlert
