import { Box, styled } from '@mui/material'

const CustomCarouselContainer = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    width: '100%',
    height: '100%',
    position: 'relative',
    perspective: '1000px',

    '&> .carousel-container': {
      position: 'relative',
      overflow: 'visible',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',

      '&> .carousel-content': {
        position: 'relative',
        height: 'fit-content',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // CUSTOM STYLES FOR FEATURE CARD
        '&> .feature-card': {
          position: 'absolute',
          transformOrigin: 'center center',
          transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)',

          '&.card-0': {
            transform: 'translateX(-35%) scale(1)',
            opacity: 0.7,
            zIndex: 1,
            filter: 'brightness(0.7)',
            backdropFilter: 'unset',
          },

          '&.card-1': {
            transform: 'translateX(0) scale(1.365)',
            opacity: 1,
            zIndex: 3,
            backdropFilter: 'unset',
            position: 'relative',
          },

          '&.card-2': {
            transform: 'translateX(35%) scale(1)',
            opacity: 0.7,
            zIndex: 1,
            filter: 'brightness(0.7)',
            backdropFilter: 'unset',
          },

          // ANIMATION STATES FOR SLIDING
          '&.sliding-left': {
            transform: 'translateX(-150%) scale(1)',
            opacity: 0,
          },

          '&.sliding-right': {
            transform: 'translateX(150%) scale(1)',
            opacity: 0,
          },

          '&.entering-left': {
            transform: 'translateX(150%) scale(1)',
            opacity: 0,
          },

          '&.entering-right': {
            transform: 'translateX(-150%) scale(1)',
            opacity: 0,
          },

          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },

    '& .carousel-nav-button': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'white',
      zIndex: 4,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'all 300ms ease',

      '&:hover': {
        backgroundColor: '#f3f4f6',
      },

      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
      },

      '&.prev': {
        left: '2.5%',
      },

      '&.next': {
        right: '2.5%',
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    '&.MuiBox-root': {
      '& .carousel-nav-button': {
        '&.prev': {
          left: 16,
        },

        '&.next': {
          right: 16,
        },
      },
    },
  },

  [theme.breakpoints.down('xs')]: {
    '&.MuiBox-root': {
      '& .feature-card': {
        width: '72.5%!important',
        minWidth: 'unset!important',
        maxWidth: 'unset!important',
        maxHeight: '450px!important',

        '& .value-percent': {
          fontSize: '10px',
        },

        '&.card-0': {
          transform: 'translateX(-45%) scale(0.5)',
          opacity: 0.7,
          zIndex: 1,
          filter: 'brightness(0.7)',
          backdropFilter: 'unset',
        },

        '&.card-1': {
          transform: 'translateX(0) scale(1)',
          opacity: 1,
          zIndex: 3,
          backdropFilter: 'unset',
        },

        '&.card-2': {
          transform: 'translateX(45%) scale(0.5)',
          opacity: 0.7,
          zIndex: 1,
          filter: 'brightness(0.7)',
          backdropFilter: 'unset',
        },

        '& .feature-card-image': {
          minHeight: 'unset',
        },
      },
    },
  },
}))

export default CustomCarouselContainer
