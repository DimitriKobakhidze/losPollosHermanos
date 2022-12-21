
import classes from "./Header.module.css"
import headerLogo from "../../Images/logo4.png"
import Nav from "../Nav/Nav"

const Header = () =>{
    return(
        <header>
            <img src={headerLogo} className={classes["header-logo"]} alt="" />
            <Nav />
        </header>
    )
}


export default Header