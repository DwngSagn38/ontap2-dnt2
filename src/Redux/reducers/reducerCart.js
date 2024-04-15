import { createReducer } from "@reduxjs/toolkit";
import { addToCart, removeCart } from "../actions/actionCart";

const initialCartState ={
    Items: []
}

const listCart = createReducer(initialCartState, builder => {
    builder
    .addCase(addToCart,(state, action) => {
        const existingItem = state.Items.find(item=> item.id === action.payload.id);
        if(!existingItem){
            state.Items.push({...action.payload, quantity : 1});
        }else{
            existingItem.quantity++;
        }
    })
    .addCase(removeCart,(state, action) => {
        const existingItemIndex = state.Items.findIndex(item => item.id === action.payload.id);
        if(existingItemIndex !== -1){
            const existingItem = state.Items[existingItemIndex];
            existingItem.quantity--;
            if(existingItem.quantity === 0){
                state.Items = state.Items.filter(item => item.id !== action.payload.id);
            }
        }
    })
})

export default listCart;
