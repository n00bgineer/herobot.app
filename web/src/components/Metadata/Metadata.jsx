import { Helmet } from 'react-helmet-async'
import config from '../../config'

const Metadata = ({ title, description, canonical, og, robots, twitter }) => {
  // SETTING LOCAL VARIABLES
  const { appTitle } = config;
   
  return (
    <Helmet>
      {
        title?
        <title>{title} | {appTitle}</title>:
        <title>{appTitle}</title>
      }
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {robots && <meta name="robots" content={robots} />}
      
      {/* Open Graph tags */}
      {og && og.title && <meta property="og:title" content={og.title} />}
      {og && og.description && <meta property="og:description" content={og.description} />}
      {og && og.image && <meta property="og:image" content={og.image} />}
      {og && og.url && <meta property="og:url" content={og.url} />}
      {og && og.type && <meta property="og:type" content={og.type} />}
      
      {/* Twitter tags */}
      {twitter && twitter.card && <meta name="twitter:card" content={twitter.card} />}
      {twitter && twitter.title && <meta name="twitter:title" content={twitter.title} />}
      {twitter && twitter.description && <meta name="twitter:description" content={twitter.description} />}
      {twitter && twitter.image && <meta name="twitter:image" content={twitter.image} />}
    </Helmet>
  )
}

export default Metadata;