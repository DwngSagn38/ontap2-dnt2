import { createReducer } from "@reduxjs/toolkit";
import { addCart, removeCart } from "./actions";

const initialCartState = {
    Cartitems : []
}

const listCart = createReducer(initialCartState,builder => {
    builder
    .addCase(addCart,(state, action) => {
        const checkItem = state.Cartitems.find(item => item.id === action.payload.id);
        if(!checkItem){
            state.Cartitems.push({...action.payload, quantity : 1});
        }else{
            checkItem.quantity++;
        }
    })
    .addCase(removeCart, (state, action) => {
        const checkItem = state.Cartitems.find(item => item.id === action.payload.id);
        if(checkItem){
            checkItem.quantity--;
            if(checkItem.quantity === 0){
                state.Cartitems.filter(item => item.id !== action.payload.id);
            }
        }
    })
})

export default listCart;