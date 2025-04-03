import { Card, styled } from '@mui/material'

const PriceCardContainer = styled(Card)(({ theme }) => ({
  '&.price-card': {
    border: `1px solid  ${theme.palette.divider}`,
    backdropFilter: 'blur(10px)',
    borderRadius: theme.spacing(3),
    flexGrow: '1',
    margin: theme.spacing(2),
    maxWidth: '450px',
    padding: theme.spacing(3),
    position: 'relative',
  },
  '&.selected-price-card': {
    border: `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`,
  },
  '& .price-card-title': {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  '& .price-card-subtitle': {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  '& .price-card-value-container': {
    margin: `${theme.spacing(2)} auto`,
  },
  '& .price-card-value': {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: '700',
    textAlign: 'center',
  },
  '&.price-card > .feature-list-label': {
    fontWeight: '600',
    textAlign: 'center',
  },
  '&.price-card > .feature-list': {
    listStyle: 'none',
  },
  '&.price-card .feature-list-item': {
    textAlign: 'center',
    margin: '10px 0px 10px -25px',
  },
  '& .price-card-action-container': {
    margin: '10px auto',
  },

  [theme.breakpoints.down('md')]: {
    '&.price-card': {
      margin: '15px auto',
      width: '100%',
      maxWidth: 'unset',
    },
  },
}))

export default PriceCardContainer
