import type React from 'react'
import bannerpng from '../../../public/pictures/banner.png'

interface BannerProps {
  title?: string
}

export const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div
      className="h-[241px] flex justify-center items-center text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerpng})`,
        fontFamily: 'Raleway',
      }}
    >
      <h1 className="text-3xl font-semibold">{title}</h1>
    </div>
  )
}

export default Banner
