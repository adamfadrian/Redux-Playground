/* eslint-disable react-hooks/rules-of-hooks */
import ButtonA from '@/components/ButtonA'
import React, { useEffect, useState } from 'react'

const index = () => {
    const [value, setValue] = useState('')
    const handleCheckLength = () => {
        const x = value.split(' ')
        return x.length
    }

    const url = "https://cdn2.thecatapi.com/images/ebv.jpg"
    const [count, setCount] = useState<number>(20)
    const x: any = []

    for (let i = 1; i <= count; i++) {
        x.push(i)
    }



    useEffect(() => {
    }, [])
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-2 p-4'>
                <input className='border max-w-screen-sm' type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <ButtonA text={'click me'} onClick={() => handleCheckLength()} />
                <div >
                    {value}
                </div>
            </div>

            <div className='grid grid-cols-5 gap-4 w-full justify-center items-center'>
                {
                    x.map((_ :any, i: number) => (
                        <CardMap count={_} url={url} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default index


function CardMap({ count, url }: { count: number, url: string }) {
    return (
        <div className='border rounded-lg p-3'>
            <p className='border-b-2'>Hello from card! {count}</p>
            <img src={url} alt="cat" style={{height: '300px', width: '100%'}} />
        </div>
    )
}