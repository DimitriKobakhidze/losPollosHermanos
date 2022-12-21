import { NavLink } from "react-router-dom"

import classes from "./Nav.module.css"


const Nav = () =>{
    return(
        <nav>
            <ul className={classes["nav-ul"]}>
            <li><NavLink to="/home" className={({ isActive }) =>
                isActive ? classes["active"] : ""
            }>Home</NavLink></li>
            <li><NavLink to="/category/food" className={({ isActive }) =>
                isActive ? classes["active"] : ""
            }>Food</NavLink></li>
            <li><NavLink to="/kombosto" className={({ isActive }) =>
                isActive ? classes["active"] : ""
            }>Drinks</NavLink></li>
            </ul>
        </nav>
    )
}


export default Nav