import type React from 'react'
import { ReactSVG } from 'react-svg'

interface CardProps {
  title: string
  picture: string
  _id: string
}

export const CardItem: React.FC<CardProps> = ({ title, picture }) => {
  return (
    <div className="bg-[#F8F8F8] h-[130px] w-[360px] flex gap-6 items-center hover:bg-[#0C7333] hover:text-white rounded-[16px] p-[32px]">
      <div>
        <ReactSVG src={picture} />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
    </div>
  )
}

export default CardItem
