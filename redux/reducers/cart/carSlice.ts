import { ReducerPayload } from '@/redux/type/ReducerPayload';
import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
    id?: number;
    category?: string;
    image?: string;
    price: number;
    title?: string
    quantity: number;

}

interface CartState {
    cart : Cart[]
}

const cartInitialState:CartState = {
    cart: []
}


const cartSlice = createSlice({
    name:"cart",
    initialState: cartInitialState,
    reducers: {
        addToCart(state, {payload}: ReducerPayload<Cart>){
            const cekCart = state.cart.some(i=> i.id === payload.id)
            if(!cekCart){
                state.cart.push({...payload})
            } else {
                alert("Item sudah ada di keranjang")
            }
        },
        removeFromCart(state,  {payload}: ReducerPayload<Cart>){
         state.cart =  state.cart.filter((i) => {
                return i.id !== payload.id
            })
        }
    }
})


const cartReducer = {
    reducer: cartSlice.reducer
}

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartReducer