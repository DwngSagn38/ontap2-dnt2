import { configureStore } from "@reduxjs/toolkit";
import listSach from "../reducers/reducers";
import listCart from "../reducers/reducerCart";

const store = configureStore({
    reducer : {
        sach : listSach,
        cart : listCart
    }
});

export default store;