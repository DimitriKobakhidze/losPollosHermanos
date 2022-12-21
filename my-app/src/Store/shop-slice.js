import { createSlice } from "@reduxjs/toolkit";


const shopSlice = createSlice({
    name:"shop-slice",
    initialState:{specialItems:[],categoryItems:[],specialOffers:[]},
    reducers:{
        setItems(state,action){
            const { type, items } = action.payload    
            state[`${type}Items`] = items
        },
    }
})

export const getShopData = (apiAddress,type=apiAddress) =>{
    return async dispatch => {
        const url = `https://lospolloshermanos-2daf5-default-rtdb.firebaseio.com/${apiAddress}.json`
        console.log(url)
        const fetchData = async () =>{
            const response = await fetch(url)
            const data = await response.json()
            dispatch(shopActions.setItems({type:type,items:data}))
        }
        try{
            await fetchData()
        }catch (error){
            console.log(error)
        }
    }
}


export const shopActions = shopSlice.actions
export default shopSlice.reducer