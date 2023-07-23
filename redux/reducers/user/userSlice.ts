import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReducerPayload } from "@/redux/type/ReducerPayload";

interface User {
  username?: string;
  email?: string;
  image?: string
}

export interface UserState {
  currentUser?: User;
}

const UserInitialState: UserState = {
  currentUser: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState: UserInitialState,
  reducers: {
    storeUser(state, { payload }: ReducerPayload<User>) {
      const lastSyncTime = Date.now().toFixed();
      state.currentUser = { ...payload };
    },
    resetUser(state) {
      state.currentUser = undefined;
    },
  },
});

const userReducer = {
  state: userSlice.reducer,
};

export const { storeUser, resetUser } = userSlice.actions;
export default userReducer;
