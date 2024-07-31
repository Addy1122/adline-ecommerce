import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartSlice";
import userReducer from "./userSlice";

export default store = configureStore({
    reducer:{
        cart: cartslice,
        user: userReducer,
    }
})
