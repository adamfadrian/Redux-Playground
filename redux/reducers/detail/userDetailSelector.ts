import type { RootState } from "@/redux/store/store";


export const userDetailSelector = ({userDetail} : RootState) => {
    return userDetail.userDetail
}

