/* eslint-disable react-hooks/rules-of-hooks */
import DetailUser from '@/components/DetailUser'
import ListUser from '@/components/ListUser'
import { userDetailSelector } from '@/redux/reducers/detail/userDetailSelector'
import { clearUserDetails, detailUser } from '@/redux/reducers/detail/userDetailSlice'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function index() {
  const [showDetail, setShowDetail] = useState<boolean>(false)
  const dispatch = useDispatch()
  const userDetails = useSelector(userDetailSelector)

  const handleDetail = async (id: number) => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      if (res.data) {
        dispatch(detailUser(res.data))
        setShowDetail(true)
      }
    } catch (error) {
    }
  }
  console.log('userDetails', userDetails)
  const handleClearDetail = () => {
    setShowDetail(false);
    dispatch(clearUserDetails())
  }
  return (
    <div className='flex min-h-screen w-full justify-center px-96'>
      <div className='flex flex-col items-center  w-full py-10'>
        <ListUser onClick={(id: number) => handleDetail(id)} />
        {showDetail && <DetailUser name={userDetails?.name} phone={userDetails?.phone} username={userDetails?.username} onClick={handleClearDetail} />}
      </div>
    </div>
  )
}
