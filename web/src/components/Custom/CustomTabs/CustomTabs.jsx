import CustomTabsContainer from './CustomTabsContainer'

const CustomTabs = ({ ...props }) => {
  return (
    <CustomTabsContainer
      TabIndicatorProps={{
        sx: { display: 'none' },
      }}
      {...props}
    />
  )
}

export default CustomTabs
