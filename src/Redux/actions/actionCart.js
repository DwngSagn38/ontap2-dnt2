const { createAction } = require("@reduxjs/toolkit");

export const addToCart = createAction("cart/addTocart"); 
export const removeCart = createAction("cart/removecart"); 