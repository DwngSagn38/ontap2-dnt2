import { createReducer, createSlice } from "@reduxjs/toolkit";
import { addToCart, removeCart } from "../actions/actions";

const initialState = {
    items: [],
}

const listSach = createSlice({
    name: 'sach',
    initialState,
    reducers: {
        addSach(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(!existingItem){
                state.items.push(action.payload);
            }
        }
    },
    extraReducers: builder => {
         // đây là chỗ để viết các thao tác mở rộng, xử lý các trạng thái của promise
    }
});

// export các thành phần để bên screen có thể sử dụng
export const { addSach } = listSach.actions;
export default listSach.reducer;
