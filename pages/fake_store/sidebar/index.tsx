/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import ButtonA from '@/components/ButtonA'
import CartCard from '@/components/fake_store/CartCard';
import SideNav from '@/components/fake_store/SideNav'
import { Cart, addToCart, removeFromCart } from '@/redux/reducers/cart/carSlice';
import { cartSelector } from '@/redux/reducers/cart/cartSelector';
import { StoreItems } from '@/utils/type';
import axios from 'axios'
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function index() {
    const [showSideBar, setShowSideBar] = useState<boolean>(false)
    const [closeBar, setCloseBar] = useState<boolean>(false)
    const [storeItems, setStoreItems] = useState<StoreItems[]>([])
    const dispatch = useDispatch()
    const getCart = useSelector(cartSelector)

    const handleClose = () => {
        setShowSideBar(false)

    }
    const handleOpenSideBar = () => {
        setShowSideBar(true)
    }
    const fetchStoreItem = useCallback(async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            setStoreItems(res.data)
        } catch (error) {

        }
    }, [])

    useEffect(() => {
        fetchStoreItem()
    }, [])


    const handleAddToCart = (item: Cart) => {
        dispatch(addToCart(item))
    }
    const handleRemoveFromCart = (item: Cart) => {
        dispatch(removeFromCart(item))
    }

    return (
        <div>
            <ButtonA text='open' onClick={handleOpenSideBar} />
            <SideNav isOpen={showSideBar} onClose={handleClose}>
                {
                    getCart.map(item => (
                        <>
                            <div className='flex justify-between border rounded p-2' key={item.id}>
                                <div className='flex gap-4 items-center' >
                                    <img src={item.image} width={40} height={40} alt={item.category} />
                                    <div className='flex flex-col'>
                                        <h1>{item.category}</h1>
                                        <h1>${item.price}</h1>
                                    </div>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <h1>$ total</h1>
                                    <ButtonA text='x' onClick={() => handleRemoveFromCart(item)} />
                                </div>
                            </div>
                        </>
                    ))
                }
            </SideNav>

            <div className='grid grid-cols-4 gap-10'>
                {
                    storeItems.map((item) => (
                        <>
                            <CartCard
                                onClick={() => handleAddToCart(item)}
                                key={item.id}
                                title={item.title}
                                category={item.category}
                                image={item.image}
                                price={item.price} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}
