'use client'

import Image from 'next/image'
import React from 'react'

interface AvatarProps {
  src?: string
  alt?: string
  size?: number
  className?: string
  priority?: boolean
  sizes?: string
}

// Circular avatar with subtle gradient ring and glow
const Avatar: React.FC<AvatarProps> = ({
  src = '/aryan_image.jpeg',
  alt = 'Profile photo',
  size,
  className = '',
  priority = true,
  sizes,
}) => {
  const useFill = typeof size !== 'number'
  const dimension = typeof size === 'number' ? size : 144

  return (
    <div
      className={`relative inline-block rounded-full p-[3px] bg-gradient-to-tr from-emerald-400/70 via-cyan-400/70 to-blue-400/70 shadow-2xl avatar-hover avatar-float will-change-transform ${className}`}
      style={useFill ? undefined : { width: dimension, height: dimension }}
      aria-label={alt}
    >
      <div className="absolute -inset-3 rounded-full blur-2xl opacity-25 bg-emerald-400/50 avatar-glow will-change-opacity" aria-hidden />
      {useFill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            sizes ||
            '(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 176px'
          }
          priority={priority}
          className="rounded-full object-cover w-full h-full ring-2 ring-white/10"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={dimension}
          height={dimension}
          sizes={`${dimension}px`}
          priority={priority}
          className="rounded-full object-cover w-full h-full ring-2 ring-white/10"
        />
      )}
    </div>
  )
}

export default Avatar


