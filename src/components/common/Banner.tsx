import type React from 'react'

interface BannerProps {
  title?: string
}

export const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div
      className="bg-[#0C7333] h-[241px] flex justify-center items-center text-white text-center"
      style={{
        fontFamily: 'Raleway',
      }}
    >
      <h1 className="text-3xl font-semibold">{title}</h1>
    </div>
  )
}

export default Banner
