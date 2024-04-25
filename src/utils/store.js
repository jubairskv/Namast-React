import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice
    }
});

export default store

/**
 * create store
 * configurstore()-redux toolkit (RTK)
 * 
 * provider my store in APP.js
 * <Provider store={store}  -import from react redux
 * 
 * slice
 * RTK-createslicer({
 * name:""
 * initialstate:
 * reducers:
 *        addItem(state,action)=>{
 *         state=action.payload
 * }
 * export const{addItem,removeItem,clearItem}=cartslice.aaction
 * export defuault cartSlice.reducers
 * })
 * 
 * 
 * put the slice into the store
 * redcer:{
 *      cart:cartSlice,
 *       user:userSlice 
 */

