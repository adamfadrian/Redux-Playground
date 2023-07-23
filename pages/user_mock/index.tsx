/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ListUser from '@/components/ListUser'
import DetailUser, { Detail } from '@/components/DetailUser'
import ButtonA from '@/components/ButtonA'
import { Button, IconButton, Menu, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser } from '@/redux/reducers/user/userSlice'
import router from 'next/router'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { RootState } from '@/redux/store/store'
import Link from 'next/link'
export interface getUser {
  name: string;
  phone: string;
  username: string;

}

export default function index() {
  const dispatch = useDispatch()
  const [showDetail, setShowDetail] = useState<boolean>(true)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [user, setUser] = useState<getUser>({
    name: '',
    phone: '',
    username: '',
  })
  const USER = useSelector((state: RootState) => state.user.currentUser)



  const getDetailUser = async (id: number) => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      setUser(res.data)
      setShowDetail(true)
      console.log('user', user)
    } catch (error) {

    }
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClear = () => {
    setShowDetail(false);
  }

  const handleLogout = () => {
    dispatch(resetUser())
    router.push('/')
  }

  useEffect(() => {
    if(!USER){
      router.push('/')
    }
  },[USER])
  return (
    <div>
      <div className='flex gap-5 w-full border-b-2 mb-10 justify-center p-2 items-center'>
        <div>
          <Button variant='outlined'><Link href={'/mock_user_redux'}>GO</Link></Button>
        </div>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <div className='flex items-center gap-2 text-lg'>
            <AccountCircle />
            {USER?.username}
            </div>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
      <ListUser onClick={(id: number) => getDetailUser(id)} />

      {showDetail && <DetailUser name={user.name} phone={user.phone} username={user.username} onClick={handleClear} />}
    </div>
  )
}
