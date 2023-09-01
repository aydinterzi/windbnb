import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai';


type PropertyCardProps = {
  imgSrc: string,
  superHost: boolean,
  title: string,
  beds: number | null,
  rating: number,
  country: string,
  type: string,
}

function PropertyCard({ imgSrc, superHost, type, title, beds, rating, country }: PropertyCardProps) {
  return (
    <div className='flex flex-col gap-4'><Image className='rounded-xl h-96' src={imgSrc} width={395} height={395} alt={title} />
      <div className='flex justify-between items-center'>
        {superHost && <span className='border rounded-xl p-1.5 font-bold text-gray3'>SUPER HOST</span>}<span className='text-gray3'>{type} {beds} beds</span>
        <span className='flex gap-1 items-center'><AiFillStar className="w-6 h-6 text-[#EB5757]" />{rating}</span>
      </div>
      <p className='font-semibold text-lg w-4/5 text-ellipsis whitespace-nowrap overflow-hidden'>{title}</p>
    </div>
  )
}

export default PropertyCard