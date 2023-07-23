/* eslint-disable react-hooks/rules-of-hooks */
import Loading from '@/components/Loading'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import router from 'next/router'
import React, { useCallback, useState } from 'react'

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
                alert('register success')
                router.push('/')
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)

        }
    }, [email, password, username])
    return (
        <div className='flex min-h-screen flex-col items-center justify-center '>
            <form className='flex flex-col border p-8 rounded gap-4' onSubmit={handleRegister}>
                <div className='mx-auto'>
                    REGISTER FORM
                </div>
                <TextField
                    label="email"
                    type="text"
                    variant="outlined"
                    size='small'
                    name='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    required
                    label="username"
                    type="text"
                    name='username'
                    variant="outlined"
                    size='small'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    name='password'
                    autoComplete="current-password"
                    variant="outlined"
                    size='small'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='w-full items-center justify-center flex flex-col gap-1'>
                    <Button variant='outlined' size='small' sx={{ marginTop: '10px' }} color='primary' type='submit' fullWidth>
                        Register {isLoading ? <Loading /> : <></>}
                    </Button>
                    <h1 className="text-sm">
                        Already have an account? <Link href={'/'} className='hove:underline'>sign in</Link>
                    </h1>
                </div>
            </form>
        </div>
    )
}
