/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Input, TextField } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import router from 'next/router'
import { storeUser } from '@/redux/reducers/user/userSlice'
import { SubmitHandler, useForm } from "react-hook-form";
const inter = Inter({ subsets: ['latin'] })

interface getUser {
  email?: string;
  password?: string
}


export default function Home() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const getUser = async () => {
    try {
      const res = await axios.get('http://localhost:3004/users')
      console.log(res.data)
      if (res) {
        return res.data
      }

    } catch (error) {
      console.log(error)
    }
  }

  // const handleLogin = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   try {
  //     const currentUser = await getUser()
  //     console.log('currentUser', currentUser)
  //     const user = currentUser.find((u: getUser) => u.email === email && u.password === password)

  //     if (user) {
  //       alert('login success')
  //       dispatch(storeUser(user))
  //       router.push('/user_mock')
  //     } else {
  //       alert('Invalid credentials')
  //     }
  //   } catch (error) {
  //     if (error) alert('user did not found')
  //   }

  // }, [email, password, dispatch])


  useEffect(() => {
    getUser()
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm<getUser>()
  const onSubmit: SubmitHandler<getUser> = async (data) => {

    const { email, password } = data;
    try {
      const currentUser = await getUser()
      console.log('currentUser', currentUser)
      const user = currentUser.find((u: getUser) => u.email === email && u.password === password)
      console.log('user', user)
      if (user) {
        alert('login success')
        dispatch(storeUser(user))
        router.push('/user_mock')
      } else {
        alert('Invalid credentials')
      }
    } catch (error) {
      if (error) alert('user did not found')
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center w-full`}
    >
      <div className='w-full '>
        <form className='flex flex-col border p-8 rounded gap-4 max-w-screen-sm mx-auto' onSubmit={handleSubmit(onSubmit)}>
          <div className='mx-auto'>
            LOGIN FORM
          </div>
          <TextField
            variant="outlined"
            size='small'
            error={errors.email?.type === 'required'}
            {...register('email', { required: true, })}
          // onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            error={errors.password?.type === 'required'}
            {...register('password', { required: true, minLength: 8 })}
            type="password"
            variant="outlined"
            size='small'
          // onChange={(e) => setPassword(e.target.value)}
          />
          <div className='w-full items-center justify-center flex flex-col gap-1'>
            <Button variant='outlined' size='small' fullWidth sx={{ marginTop: '10px' }} color='primary' type='submit'>
              Login
            </Button>
            <h1 className="text-sm">
              Don&apos;t have an account? <Link href={'/register'} className='hover:underline'>sign up</Link></h1>
          </div>
        </form>

      </div>
    </main>
  )
}
