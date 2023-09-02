import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function Filter() {
  return (
    <div className='border rounded-xl shadow-sm'>
      <div className='flex divide-x font-normal items-center'><div className='text-[#333] p-3'>Helsinki, Finland</div> <div className='text-[#BDBDBD] p-3'>Add guest</div> <div className='p-3'><AiOutlineSearch className="w-5 h-5 fill-[#EB5757]" /> </div>
      </div>
    </div>
  )
}

export default Filter