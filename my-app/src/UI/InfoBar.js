import { useSelector } from "react-redux"

import classes from "./InfoBar.module.css"

const InfoBar = ({ styleFor }) =>{
    const totalMoney = useSelector(state => state.cart.totalMoney)

    return(
        <div className={[classes["info-bar"], classes[styleFor]].join(' ')}>
                    <h1>{`Total: ${totalMoney}$`}</h1>
                    <button>ORDER NOW</button>
        </div>
    )
}


export default InfoBar