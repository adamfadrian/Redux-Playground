import React, { FC, useState } from 'react'
import { User } from './ListUser'


export interface Detail {
    name?: string;
    phone?: string;
    username?: string;
    onClick: React.MouseEventHandler
}


const DetailUser: FC<Detail> = ({ name, phone, username ,onClick}) => {
    if (name === undefined || phone === undefined || username === undefined) {
        return null;
      }
    return (
        <div className=' w-96'>
            <div className='flex flex-col border rounded p-5 w-full'>
                <div className='flex justify-between '>
                    <h1>name: </h1>
                    <h1>{name}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1>userName: </h1>
                    <h1>{username}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1>phone: </h1>
                    <h1>{phone}</h1>
                </div>
            </div>
            <button onClick={onClick} className='p-2 border rounded mt-2'>clear</button>
        </div>
    )
}

export default DetailUser