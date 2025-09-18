// Logo asset paths and utilities
export const LOGO_ASSETS = {
  // Main logo (flat version)
  main: '/assets/logos/rrs-logo.png',
  
  // Button version (with plaque effect)
  button: '/assets/logos/rrs-logo-button.png',
  
  // Alt text
  altText: 'RRS Reliable Roofing Solutions',
  
  // Company info
  company: {
    name: 'RRS Reliable Roofing Solutions',
    initials: 'RRS',
    tagline: 'Reliable Roofing Solutions'
  }
} as const

// Logo component props type
export interface LogoProps {
  variant?: 'main' | 'button'
  className?: string
  width?: number | string
  height?: number | string
  alt?: string
}

// Utility function to get logo path
export const getLogoPath = (variant: 'main' | 'button' = 'main'): string => {
  return LOGO_ASSETS[variant]
}

// Utility function to get alt text
export const getLogoAltText = (customAlt?: string): string => {
  return customAlt || LOGO_ASSETS.altText
}
