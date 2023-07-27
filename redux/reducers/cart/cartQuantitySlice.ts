import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "@/redux/reducers/cart/carSlice";

interface CartQuantityState {
  cartQuantity: number;
}

const cartQuantityInitialState: CartQuantityState = {
  cartQuantity: 1, // Set default quantity to 1 if not provided
};

const cartQuantitySlice = createSlice({
  name: "cartQuantity",
  initialState: cartQuantityInitialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<number>) => {
      state.cartQuantity = action.payload;
    },
    incrementQuantity: (state) => {
      state.cartQuantity += 1;
    },
    decrementQuantity: (state) => {
      if (state.cartQuantity > 1) {
        state.cartQuantity -= 1;
      }
    },
  },
});

export const {
  setQuantity,
  incrementQuantity,
  decrementQuantity,
} = cartQuantitySlice.actions;
export default cartQuantitySlice.reducer;
