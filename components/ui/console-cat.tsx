'use client'

import { useEffect } from 'react'

interface ConsoleHttpCatProps {
  statusCode?: number
}

export function ConsoleHttpCat({ statusCode = 496 }: ConsoleHttpCatProps) {
  useEffect(() => {
    const url = `https://http.cat/${statusCode}`
    const style = [
      'font-size:1px;',
      'padding:120px 240px;',
      `background:url("${url}") no-repeat center center / contain;`,
      'line-height:0;',
      'color:transparent;'
    ].join(' ')

    // Log a friendly label first
    // eslint-disable-next-line no-console
    console.log(`HTTP Cat ${statusCode} → ${url}`)
    // Render the image in console
    // eslint-disable-next-line no-console
    console.log('%c ', style)
  }, [statusCode])

  return null
}


