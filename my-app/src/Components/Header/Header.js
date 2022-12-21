import { useState } from "react"

import classes from "./Header.module.css"
import headerLogo from "../../Images/logo4.png"
import Nav from "../Nav/Nav"
import {BsFillCartFill} from "react-icons/bs"
import MiniCartModal from "./MiniCartModal"

const Header = () =>{
    const [showCart,setShowCart] = useState(false)
    return(
        <header>
            <img src={headerLogo} className={classes["header-logo"]} alt="" />
            <Nav />
            <div onClick={() => setShowCart(prev => !prev)} className={classes["cart-div"]}>
                <BsFillCartFill className={classes["cart-icon"]} />
            </div>
            {showCart && <MiniCartModal />}
        </header>
    )
}


export default Header