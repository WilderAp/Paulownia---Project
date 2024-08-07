import type React from 'react'
import { useEffect } from 'react'

interface LayoutProps {
  maxWidth?: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  maxWidth = 'max-w-[1200px]',
  children,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={` w-full ${maxWidth} mx-auto px-[16px]`}>{children}</div>
  )
}
