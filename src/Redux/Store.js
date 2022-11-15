import { configureStore } from "@reduxjs/toolkit";
import UserDetails from "./DetailsSlice"

export const store = configureStore({
    reducer:{
    UserDetails,
    }
})
