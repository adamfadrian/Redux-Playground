import { Button } from '@mui/material';
import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
export interface User {
    id: number;
    name?: string;
    phone?: string;
    username?: string;
}

interface BTN {
    onClick: (id: number) => void;

}
const ListUser:FC<BTN> = ({onClick}) => {
    const [users, setUsers] = useState<User[]>([])

    const fetchDataUser = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    console.log('test user', users)
    useEffect(() => {
        fetchDataUser()
    }, [])

    return (
        <div className='flex flex-col p-5 border w-full rounded-sm gap-5'>
            {
                users.map((data: User, idx: number) => {
                    return (
                        <>
                            <div className='flex justify-between items-center border p-2 rounded bg-slate-100'>
                                <h1 className='font-semibold'>{data.name}</h1>
                                <Button variant='outlined' size='small' className='border px-4 py-2 rounded' onClick={() => onClick(data.id)}>Detail</Button>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ListUser