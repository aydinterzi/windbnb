import React from 'react'
import Image from 'next/image'
import Filter from './filter'

function Header() {
  return (
    <header className='flex items-center justify-between  mt-12'>   <Image
      src="/logo.png"
      width={100}
      height={20}
      alt="Picture of the author"
    />

      <Filter /></header>
  )
}

export default Header