import { createReducer, createSlice } from "@reduxjs/toolkit";
import { addCart, removeCart } from "./actions";

const initialState = {
    Sachitems : []
}



const Sachs = createSlice({
    name: 'sach',
    initialState ,
    reducers: {
        addSach(state, action){
            const checkItem = state.Sachitems.find(item => item.id === action.payload.id);
            if(!checkItem){
                state.Sachitems.push(action.payload);
            }
        }
    },
    extraReducers: builder => {

    }   
})




export const { addSach } = Sachs.actions;
export default Sachs.reducer;
