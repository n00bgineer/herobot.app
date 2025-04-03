import { Card, styled } from '@mui/material'

const ReportCardContainer = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    backdropFilter: 'unset',
    minWidth: '300px',
    overflow: 'hidden',
    transition:
      'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)',

    '&:hover': {
      zIndex: '3',
      boxShadow: theme.shadows[4],
      backdropFilter: 'unset',
    },

    '&> .header': {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      '&> .header-data': {
        '&> .title': {
          fontWeight: '500',
        },
        '&> .description': {
          fontWeight: '400',
        },
      },
    },

    '&> .body': {
      '&> .map-container': {
        height: '275px',
        minHeight: '275px',
        maxHeight: '275px',
        overflow: 'hidden',
        position: 'relative',

        '&> CustomImage': {
          width: '100%',
          height: '100%',

          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.25)',
          },
        },

        // Common styles for randomly positioned icons
        '& .map-icon': {
          position: 'absolute',
          width: theme.spacing(2),
          height: theme.spacing(2),
          zIndex: 1,
          pointerEvents: 'auto',
          transition: 'all 0.3s ease-in-out',

          '&:hover': {
            width: '24px',
            height: '24px',
            opacity: 1,
            zIndex: 10,
            transform: 'translate(-15%, -15%)',
          },

          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          },
        },

        // Individual icon positions
        '& .map-icon-0': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          width: theme.spacing(3),
          height: theme.spacing(3),
          pointerEvents: 'auto',
          transition: 'all 0.3s ease-in-out',

          '&:hover': {
            width: theme.spacing(3),
            height: theme.spacing(3),
          },

          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          },
        },
        '& .map-icon-1': {
          top: '20%',
          left: '10%',
        },
        '& .map-icon-2': {
          top: '70%',
          left: '25%',
        },
        '& .map-icon-3': {
          top: '35%',
          left: '75%',
        },
        '& .map-icon-4': {
          top: '15%',
          left: '90%',
        },
        '& .map-icon-5': {
          top: '25%',
          left: '60%',
        },
        '& .map-icon-6': {
          top: '80%',
          left: '55%',
        },

        '&> *': {
          width: '100%',
          height: '100%',

          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.5)',
          },
        },
      },
      '&> .data-container': {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        gap: theme.spacing(1),

        '&> .price-container': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: theme.spacing(2),

          '&> *': {
            flexGrow: '1',
          },

          '&> .market-price-container': {
            borderRight: `1px solid ${theme.palette.grey['500']}`,
            paddingRight: theme.spacing(2),
          },

          '&> .actual-price-container': {
            '&> .price': {
              '&> .rate-indicator': {
                display: 'inline-flex',
                alignItems: 'center',

                '&> .MuiSvgIcon-root': {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '32px',
                  height: '32px',
                  marginLeft: '-5px',
                  marginRight: '-1.5px',
                  '&> path': {
                    width: '32px',
                  },
                },
              },
            },
          },
        },

        '&> .properties-container': {
          '&> .title': {
            marginBottom: theme.spacing(0.5),
          },
          '&> .property': {
            paddignBottom: theme.spacing(1),
            marginBottom: theme.spacing(0.5),
            borderBottom: `1px solid ${theme.palette.primary['500']}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        },
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    '&.MuiCard-root': {
      '&> .body': {
        '&> .data-container': {
          '&> .price-container': {
            '&> .actual-price-container': {
              '&> .price': {
                '&> .rate-indicator': {
                  display: 'none',
                },
              },
            },
          },
        },
      },
    },
  },
}))

export default ReportCardContainer
