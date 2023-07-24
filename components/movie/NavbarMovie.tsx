import Link from 'next/link'
import React from 'react'

const NavbarMovie = ({children} : {
  children: React.ReactNode
}) => {
  return (
    <div className='flex w-full items-center gap-56 py-5  justify-center border-b-2 border-cyan-500'>
    <div className='flex  items-center  gap-20'>
      <h1 className='font-semibold text-xl'>Moive</h1>
      <div>
        {children}
      </div>
    </div>
    <div className='flex gap-5'>
      <Link href={''} className='font-semibold text-xl'>Popular</Link>
      <Link href={''} className='font-semibold text-xl'>Trending</Link>
      <Link href={'/movie_fav'} className='font-semibold text-xl'>Favorites</Link>
    </div>
  </div>
  )
}

export default NavbarMovie