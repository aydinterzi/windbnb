import Image from 'next/image'
import React from 'react'

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
    <div className='flex flex-col gap-4'><Image className='rounded-lg' src={imgSrc} width={395} height={300} alt={title} />
      <div className='flex justify-between'>
        {superHost && <span className='border rounded-xl p-1'>SUPER HOST</span>}<span className='text-gray3'>{type} {beds} beds</span>
        <span>{rating}</span>
      </div>
      <p>{title}</p>
    </div>
  )
}

export default PropertyCard