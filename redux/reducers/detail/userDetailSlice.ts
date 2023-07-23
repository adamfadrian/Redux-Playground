import { ReducerPayload } from "../../type/ReducerPayload";
import { createSlice } from "@reduxjs/toolkit";

interface detailUser {
  name: string;
  phone: string;
  username: string;
}

export interface detailUserState {
  userDetail?: detailUser;
}

const detailUserInitialState: detailUserState = {
  userDetail: undefined,
};

const userDetailSlice = createSlice({
  name: "userDetails",
  initialState: detailUserInitialState,
  reducers: {
    detailUser(state, { payload }: ReducerPayload<detailUser>) {
      state.userDetail = { ...payload };
    },
    clearUserDetails(state) {
      state.userDetail = undefined;
    },
  },
});

const userDetailReducer = {
  reducer: userDetailSlice.reducer,
};

export const { detailUser, clearUserDetails } = userDetailSlice.actions;
export default userDetailReducer;
