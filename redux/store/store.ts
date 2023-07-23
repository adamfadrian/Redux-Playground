import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducers from "@/redux/reducers/favorite/favoriteSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "../reducers/user/userSlice";
import userDetailReducer from "../reducers/detail/userDetailSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  favorite: persistReducer(persistConfig, reducers.state),
  user: persistReducer(persistConfig, userReducer.state ),
  userDetail: persistReducer(persistConfig, userDetailReducer.reducer)
})

const store = configureStore({
  reducer: rootReducer
});

const persistor = persistStore(store);

export { store, persistor };
export default store;
export type RootState = ReturnType<typeof store.getState>;
