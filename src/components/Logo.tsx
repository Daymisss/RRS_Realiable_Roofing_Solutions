import React from 'react'
import Image from 'next/image'
import { LogoProps, getLogoPath, getLogoAltText } from '@/lib/logoAssets'

/**
 * RRS Logo Component
 * 
 * Usage:
 * <Logo variant="main" className="h-12 w-auto" />
 * <Logo variant="button" className="h-16 w-auto" />
 */
const Logo: React.FC<LogoProps> = ({
  variant = 'main',
  className = '',
  width,
  height,
  alt
}) => {
  const logoPath = getLogoPath(variant)
  const altText = getLogoAltText(alt)

  return (
    <Image
      src={logoPath}
      alt={altText}
      width={typeof width === 'number' ? width : (variant === 'button' ? 200 : 150)}
      height={typeof height === 'number' ? height : (variant === 'button' ? 60 : 45)}
      className={className}
      priority
    />
  )
}

export default Logo
