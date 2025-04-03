import { LazyLoadImage } from 'react-lazy-load-image-component'

const CustomImage = ({
  src: imageSrc,
  placeholderSrc,
  className = '',
  alt,
  ...props
}) => {
  return (
    <LazyLoadImage
      alt={alt}
      effect="blur"
      loading="lazy"
      placeholderSrc={placeholderSrc || ''}
      src={imageSrc}
      visibleByDefault={false}
      className={className}
      wrapperClassName={className}
      {...props}
    />
  )
}

export default CustomImage
