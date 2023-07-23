import Link from 'next/link'
import React from 'react'

interface Nav {
 
}

const Navbar = ({children} : {
  children: React.ReactNode
}) => {
  return (
    <div className='flex w-full '>
      <div className='flex justify-between items-center'>
        <h1>Moive</h1>
        <div>
          {children}
        </div>
      </div>
      <div className='flex'>
        <Link href={''}>Popular</Link>
        <Link href={''}>Trending</Link>
        <Link href={''}>Favorites</Link>
      </div>
    </div>
  )
}

export default Navbar