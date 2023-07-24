import { RootState } from "@/redux/store/store";

export const cartSelector = ({ cart }: RootState) => {
    return cart.cart
};
