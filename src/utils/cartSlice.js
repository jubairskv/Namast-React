import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({             //store data
    name:"cart",
    initialState:{
        items:[]                    //state
    },
    reducers:{                  //reducer function
        addItem:(state,action) => {          //action-comiming data
            state.items.push(action.payload)    //when you click the addItem btn the date came here    

        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items = []
        },
    },
});

export const {addItem,removeItem,clearCart}=cartSlice.actions

export default cartSlice.reducer;

// cartSlice={
//     actions:{
//         addItem,   this is export data in upper redux store like this
//         removeItem,
//         clearCart
//     },
//     reducer:reducers
// }