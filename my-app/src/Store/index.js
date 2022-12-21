import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart-slice";
import shopReducer from "./shop-slice";

const store = configureStore({reducer:{cart:cartReducer,shop:shopReducer}})


export default store