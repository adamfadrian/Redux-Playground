import React, { FC, useState } from 'react'
import { PiCookingPot } from 'react-icons/pi'
import { GrFormClose } from 'react-icons/gr'
import { BiMinus } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'

interface Props {
  isOpen?: boolean;
  children?: React.ReactNode
  onClose?: () => void
}

const SideNav: FC<Props> = ({ isOpen = false, children, onClose }) => {

  const handleClose = () => {
    if (onClose) onClose()
  }
  if (!isOpen) return null
  return (
    <>
      {isOpen && (
        <div className='top-0 right-0 fixed bg-sky-100 w-[500px] h-full p-4 flex flex-col gap-10 z-50'>
          <div className='w-full  flex justify-between items-center border-b-2 border-black py-2'>
            <h1 className='text-black text-3xl'>CART</h1>
            <button className='text-xl text-black border border-black w-10 rounded flex justify-center' onClick={handleClose}>x</button>
          </div>
          <div className='flex flex-col gap-3'>
            {children}
          </div>
        </div>
      )
      }
    </>
  )
}

export default SideNav
