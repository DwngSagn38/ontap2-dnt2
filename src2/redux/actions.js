import {createAction} from '@reduxjs/toolkit'
import { addSach } from './reducer';

export const addCart = createAction('cart/addCart');
export const removeCart = createAction('cart/removeCart');

const URL = 'http://192.168.100.3:3000/Sach';

export const fetchData = () => {
    return async dispatch => {
        try {
            const res = await fetch(URL);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addSach(item));
            });
        } catch (error) {
            console.log(error)
        }
    }
} 