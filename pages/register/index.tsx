/* eslint-disable react-hooks/rules-of-hooks */
import Loading from '@/components/Loading'
import LoadingDots from '@/components/LoadingDots'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import router from 'next/router'
import React, { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Input  {
    email: string,
    password: string
    username: string
}


export default function index() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleRegister = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const res = await axios.post('http://localhost:3004/users', {
                email: email,
                password: password,
                username: username
            })
            if (res.data) {
                router.push('/')
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)

        }
    }, [email, password, username])

    const { register, handleSubmit, formState: { errors } } = useForm<Input>()

    const onSubmit: SubmitHandler<Input> = async (data) => {
        console.log(data)
        setIsLoading(true)
        const res = await axios.post('http://localhost:3004/users', {...data})
        if (res.data) {
            router.push('/')
        }
    }



    return (
        <div className='flex min-h-screen flex-col items-center justify-center '>
            <form className='flex flex-col border p-8 rounded gap-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='mx-auto'>
                    REGISTER FORM
                </div>
                <TextField
                    // label="email"
                    // type="text"
                    variant="outlined"
                    size='small'
                    error={errors.email?.type === 'required'}
                    {...register('email', {required: true})}
                    // name='email'
                    // required
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    // label="username"
                    // type="text"
                    variant="outlined"
                    size='small'
                    error={errors.username?.type === 'required'}
                    {...register('username', {required: true})}
                    // required
                    // name='username'
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    // label="Password"
                    type="password"
                    // autoComplete="current-password"
                    variant="outlined"
                    size='small'
                    error={errors.password?.type === 'required'}
                    {...register('password', {required: true})}
                    // name='password'
                    // required
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                />
                <div className='w-full items-center justify-center flex flex-col gap-1'>
                    <Button variant='outlined' size='small' sx={{ marginTop: '10px' }} color='primary' type='submit' fullWidth>
                         {isLoading ? <LoadingDots /> : <>Register</>}
                    </Button>
                    <h1 className="text-sm">
                        Already have an account? <Link href={'/'} className='hove:underline'>sign in</Link>
                    </h1>
                </div>
            </form>
        </div>
    )
}
