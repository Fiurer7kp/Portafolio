import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  style?: React.CSSProperties
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = 'https://via.placeholder.com/400x400?text=Photo',
  className,
  style,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={() => setImgSrc(fallbackSrc)}
    />
  )
}
