import { Tabs as MuiTabs } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomTabsContainer = styled(MuiTabs)(({ theme }) => ({
  '&.MuiTabs-root': {
    padding: 'unset',
    margin: 'unset',
    height: 'fit-content',
    minHeight: 'fit-content',

    '& .MuiTabs-flexContainer': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: theme.spacing(1),
    },
  },
}))

export default CustomTabsContainer
