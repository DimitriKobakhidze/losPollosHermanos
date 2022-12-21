import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import classes from "./HomePage.module.css"
import Slider from "../../Components/Slider/Slider"
import { getShopData } from "../../Store/shop-slice"

const HomePage = () =>{
    const dispatch = useDispatch()
    const specialItems = useSelector(state => state.shop.specialItems)

    useEffect(()=>{
        dispatch(getShopData("special"))
    },[dispatch])

    return(
        <div className={classes["home-container"]}>
            {specialItems.length > 0 && 
            <>
                <Slider items={specialItems} />
                <div id="special" className={classes["special-container"]}>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                </div>
            </>
            }
        </div>
    )
}

export default HomePage