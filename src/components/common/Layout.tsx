import type React from 'react'

interface LayoutProps {
  maxWidth?: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  maxWidth = 'max-w-[1200px]',
  children,
}) => {
  return (
    <div className={` w-full ${maxWidth} mx-auto px-[10px] py-4`}>
      {children}
    </div>
  )
}
