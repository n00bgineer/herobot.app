import {
  Favorite,
} from '@mui/icons-material'

import AppLogo from 'src/assets/herosite-logo.webp'
import AppLogoOptimised from '../assets/herosite-logo--optimised.webp'

export default {
  global: {
    header: {
      appName: "HeroBot",
      appTitle: "HeroBot - Your personal AI learning wizard",
      siteUrl: "https://herobot.site/",
      appLogo: AppLogo,
      appLogoOptimised: AppLogoOptimised,
      links: [
        
      ],
    },
    footer: {
      appName: 'HeroBot',
      appDescription:
        'HeroBot is your personalized AI learning wizard',
      appLocation: (
        <>
          Built with <Favorite fontSize="inherit" color="error" /> from Bengaluru, India
        </>
      ),
      appLogo: AppLogo,
      appLogoOptimised: AppLogoOptimised,
      links: {
        about: {
          title: 'About',
          urls: [
            {
              url: '/about',
              text: 'About',
            },
            {
              url: '/#roadmaps',
              text: 'Roadmaps',
            },
            {
              url: '/#feature',
              text: 'Features',
            },
            {
              url: '/terms',
              text: 'Terms of Services',
            },
            {
              url: '/privacy',
              text: 'Privacy',
            },
            {
              url: '/refund',
              text: 'Refund',
            },
            {
              url: '/copyright',
              text: 'Copyright',
            },
          ],
        },
        contact: {
          title: 'Contact',
          urls: [
            {
              url: 'mailto:support@herobot.site',
              text: 'support@herobot.site',
              isExternal: true,
            },
            {
              url: 'https://www.google.com/maps/place/18th+B+Cross+Rd,+laksmipuram,+Indiranagar,+Bengaluru,+Karnataka+560008/@12.9791178,77.6285374,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae16a2a248342f:0xac5a0f475c2439b4!8m2!3d12.9791178!4d77.6311123!16s%2Fg%2F1tf195yt!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D',
              text: '18th B Cross Road, Laksmipuram, Indiranagar, Bengaluru, Karnataka - 560008',
              isExternal: true,
            },
          ],
        },
        social: {
          title: 'Social',
          urls: [
            {
              url: 'https://www.linkedin.com/in/asxyzp/',
              text: 'LinkedIn',
              isExternal: true,
            },
            {
              url: 'https://www.x.com/n00bgineer',
              text: 'Twitter',
              isExternal: true,
            },
          ],
        },
      },
    },
  },
  page: {
    home: {
      meta: {
        pageTitle: 'Home',
        description:
          'Your personal AI learning wizard',
        canonical: 'https://herobot.site',
        og: {
          title: 'Herobot.site',
          description:
            'Your personal AI learning wizard',
          url: 'https://herobot.site',
          type: 'website',
          image:
            'https://res.cloudinary.com/dizbsofmd/image/upload/v1743680277/HeroBot_logo_buwal5.png',
        },
        robots: 'index,follow',
        twitter: {
          card: 'summary',
          site: '@HeroBot',
          title: 'HeroBot.site',
          description:
            'Your personal AI learning wizard',
        },
      },
      hero: {
        title: "You are the hero of your own story",
        description: "Your learning journey begins with a simple question: What do you want to learn?",
      },
    },
    about: {
      meta: {
        pageTitle: 'About',
        description:
          "Why's & How's of HeroBot",
        canonical: 'https://herobot.site/about',
        og: {
          title: 'About | HeroBot.site',
          description:
            "Why's & How's of HeroBot",
          url: 'https://herobot.site/about',
          type: 'website',
          image:
            'https://res.cloudinary.com/dizbsofmd/image/upload/v1743680277/HeroBot_logo_buwal5.png',
        },
        robots: 'index,follow',
        twitter: {
          card: 'summary',
          site: '@HeroBot',
          title: 'About | HeroBot.site',
          description:
            "Why's & How's of HeroBot",
        },
      },
    },
    copyright: {
      meta: {
        pageTitle: 'Copyright policy',
        description:
          "Copyright policy and intellectual property rights information for HeroBot.site",
        canonical: 'https://herobot.site/copyright',
        og: {
          title: 'Copyright Policy | HeroBot.site',
          description:
            'Official copyright policy and intellectual property rights information for HeroBot.site',
          url: 'https://herobot.site/copyright',
          type: 'website',
          image:
            'https://res.cloudinary.com/dizbsofmd/image/upload/v1743680277/HeroBot_logo_buwal5.png',
        },
        robots: 'index,follow',
        twitter: {
          card: 'summary',
          site: '@HeroBot',
          title: 'Copyright policy | HeroBot.site',
          description:
            'Official copyright policy and intellectual property rights information for HeroBot.site',
        },
      },
      document: ``,
    },
    privacy: {
      meta: {
        pageTitle: 'Privacy Policy',
        description:
          "Privacy policy and data protection information for HeroBot.site",
        canonical: 'https://herobot.site/privacy',
        og: {
          title: 'Privacy Policy | HeroBot.site',
          description:
            'How HeroBot.site collects, uses, and protects your personal information',
          url: 'https://herobot.site/privacy',
          type: 'website',
          image:
            'https://res.cloudinary.com/dizbsofmd/image/upload/v1743680277/HeroBot_logo_buwal5.png',
        },
        robots: 'index,follow',
        twitter: {
          card: 'summary',
          site: '@HeroBot',
          title: 'Privacy Policy | HeroBot.site',
          description:
            'Learn how HeroBot.site protects your privacy and handles your data',
        },
      },
      document: ``,
    },
    terms: {
      meta: {
        pageTitle: 'Terms of Service',
        description:
          "Terms of Service and usage guidelines for HeroBot.site",
        canonical: 'https://herobot.site/terms',
        og: {
          title: 'Terms of Service | HeroBot.site',
          description:
            'Official terms of service, usage guidelines, and legal agreement for using HeroBot.site',
          url: 'https://herobot.site/terms',
          type: 'website',
          image:
            'https://res.cloudinary.com/dizbsofmd/image/upload/v1743680277/HeroBot_logo_buwal5.png',
        },
        robots: 'index,follow',
        twitter: {
          card: 'summary',
          site: '@HeroBot',
          title: 'Terms of Service | HeroBot.site',
          description:
            'Understanding HeroBot.site terms of service - usage guidelines, restrictions, and legal agreement',
        },
      },
      document: ``,
    },
  },
}
