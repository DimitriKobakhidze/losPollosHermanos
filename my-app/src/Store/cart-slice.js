import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart-slice",
    initialState:{cartItems:["test","test2"],totalMoney:0,totalItems:0},
    reducers:{
        addItem(state,action){
            const { id, title, price } = action.payload
            const sameItem = state.cartItems.find(item => item.id === id)
            if(sameItem){
                sameItem.count++
                state.totalItems++
                state.totalMoney += sameItem.price
            }else{
                state.push({id,title,price,count:0})
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer