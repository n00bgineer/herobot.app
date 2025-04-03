import { Card, styled } from '@mui/material'

const FeatureCardComponent = styled(Card)(({ theme }) => ({
  '&.MuiCard-root.feature-card': {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(3),
    position: 'relative',
    backdropFilter: 'blur(10px)',
    width: '300px',
    minWidth: '300px',
    maxWidth: '300px',
    overflow: 'hidden',
    transition:
      'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)',

    '&:hover': {
      zIndex: '3',
      transform: 'scale(1.05)',
      boxShadow: theme.shadows[4],
      backdropFilter: 'unset',
    },

    '&.center-card': {
      position: 'absolute',
      top: '50',
      left: '50',
      zIndex: '2',
      width: '350px',
      minWidth: '350px',
      maxWidth: '350px',
    },

    '&> .header': {
      padding: theme.spacing(1.5),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: theme.spacing(1),
      marginTop: '-4px',

      '&> .header-content': {
        '&> .title': {
          fontWeight: '600',
          marginBlock: 'unset',
          lineHeight: 'unset',
        },

        '&> .description': {
          fontWeight: '400',
          color: theme.palette.grey[600],
          marginBlock: 'unset',
          marginTop: theme.spacing(-0.15),
        },

        '&> .tags-container': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: theme.spacing(0.5),
          marginTop: theme.spacing(0.75),
        },
      },

      '&> .value': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: `1px solid ${theme.palette.grey['500']}`,
        borderRadius: `calc(${theme.spacing(2.5)} - ${theme.spacing(1)})`, // BORDER RADIUS OF MAIN CARD - PADDING OF THE HEADER
        padding: theme.spacing(0.1),
        paddingRight: theme.spacing(1), // TO MAKE EQUAL SPACING BECAUSE THE ICON IS TAKING ADDITIONAL SPACING

        '&.value-positive': {
          border: `1px solid ${theme.palette.success.main}`,
          background: theme.palette.success['200'],

          '&> .value-container': {
            '&> .value-symbol': {
              color: theme.palette.success.main,
            },
          },
        },

        '&.value-negative': {
          border: `1px solid ${theme.palette.error.main}`,
          background: theme.palette.error['200'],

          '&> .value-container': {
            '&> .value-symbol': {
              color: theme.palette.error.main,
            },
          },
        },

        '&> .value-container': {
          display: 'flex',
          alignItems: 'flex-end',

          '&> .value-symbol': {
            fontWeight: '500',
          },
        },
      },
    },

    '& .feature-card-image': {
      width: '100%',
      height: '100%',
      borderRadius: theme.spacing(3),
      minHeight: '250px',
    },
  },

  [theme.breakpoints.down('xl')]: {
    '&.MuiCard-root': {
      minWidth: '60%',
      height: 'auto',
      maxHeight: '80vh',
    },

    '&.center-card': {
      position: 'static',
    },
  },

  [theme.breakpoints.down('lg')]: {
    '&.MuiCard-root': {
      minWidth: '100%',
      height: 'auto',
    },

    '& .image': {
      height: '300px',
      objectFit: 'cover',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '&.MuiCard-root': {
      minWidth: '100%',
      aspectRatio: 'unset',
    },
  },
}))

export default FeatureCardComponent
