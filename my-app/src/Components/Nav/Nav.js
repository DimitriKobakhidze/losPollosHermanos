import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"

import classes from "./Nav.module.css"



const Nav = () =>{

    const [categories,setCategories] = useState([])
    useEffect(() =>{
        fetch("https://lospolloshermanos-2daf5-default-rtdb.firebaseio.com/categories_list.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return(
        <nav>
            <ul className={classes["nav-ul"]}>
                <li><NavLink to="/home" className={({ isActive }) =>
                    isActive ? classes["active"] : ""
                }>Home</NavLink></li>
                {categories.map((category,id) =>{
                    const title = `${category[0].toUpperCase()}${category.slice(1)}`
                    console.log(title)
                    return(
                        <li key={id}>
                            <NavLink 
                                to={`/category/${category}`} 
                                className={({ isActive }) =>isActive ? classes["active"] : ""}
                            >{title}
                            </NavLink>
                        </li>
                    )
                }
                )
                }
                <li><NavLink to="/cart" className={({ isActive }) =>
                    isActive ? classes["active"] : ""
                }>Cart Page</NavLink></li>
            </ul>
        </nav>
    )
}


export default Nav