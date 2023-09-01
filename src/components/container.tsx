import React from 'react'

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='px-16'>{children}</div>
  )
}

export default Container