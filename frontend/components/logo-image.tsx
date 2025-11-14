'use client'

import Image from 'next/image'

export default function LogoImage() {
  return (
    <img 
      src="/LOGO.PNG" 
      alt="VibeBrews" 
      className="h-8 w-8 object-contain" 
      onError={(e) => {
        const target = e.currentTarget
        target.style.display = 'none'
      }} 
    />
  )
}
