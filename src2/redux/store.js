import { configureStore } from "@reduxjs/toolkit";
import Sachs from "./reducer";
import listCart from "./reducerCart";

const store = configureStore({
    reducer : {
        sach : Sachs,
        cart : listCart
    }
});

export default store;