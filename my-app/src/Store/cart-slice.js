import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart-slice",
    initialState:{cartItems:[],totalMoney:0,totalItems:0},
    reducers:{
        addItem(state,action){
            const { id, title, price, img } = action.payload
            const sameItem = state.cartItems.find(item => item.id === id)
            state.totalItems++
            state.totalMoney += price
            if(sameItem){
                sameItem.count++
                sameItem.totalPrice+= price
            }else{
                state.cartItems.push({id,title,price,img,count:1,totalPrice:price})
            }
        },
        changeAmount(state,action){
            //changer is 1 or -1
            const { changer, id } = action.payload
            const product = state.cartItems.find(item => item.id === id)
            state.totalItems += changer
            state.totalMoney += product.price * changer
            const newCount = product.count + changer
            if(newCount === 0){
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            }else{
                product.count = newCount
                product.totalPrice += product.price * changer
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer