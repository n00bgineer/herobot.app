import CustomAbbrContainer, { CustomTooltip } from './CustomAbbrContainer'

const CustomAbbr = ({ title, children, ...props }) => {
  return (
    <CustomTooltip title={title}>
      <CustomAbbrContainer {...props}>{children}</CustomAbbrContainer>
    </CustomTooltip>
  )
}

export default CustomAbbr
