import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name:"shop-slice",
    initialState:{specialItems:[],categoryItems:[],specialOffers:[],loading:false},
    reducers:{
        setItems(state,action){
            const { type, items } = action.payload    
            state[`${type}Items`] = items
        },
        setLoading(state,action){
            const { loading } = action.payload
            state.loading = loading
        }
    }
})

export const shopActions = shopSlice.actions
export default shopSlice.reducer
export const getShopData = (apiAddress,type=apiAddress) =>{
    return async dispatch => {
        const url = `https://lospolloshermanos-2daf5-default-rtdb.firebaseio.com/${apiAddress}.json`
        const fetchData = async () =>{
            const response = await fetch(url)
            const data = await response.json()
            dispatch(shopActions.setItems({type:type,items:data}))
        }
        try{
            dispatch(shopActions.setLoading({loading:true}))
            await fetchData()
            dispatch(shopActions.setLoading({loading:false}))
        }catch (error){
            dispatch(shopActions.setLoading({loading:false}))
            console.log(error)
        }
    }
}

