import { useSelector } from "react-redux"

import classes from "./CartPage.module.css"
import Card from "./Card"
import InfoBar from "../../UI/InfoBar"

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalMoney = useSelector(state => state.cart.totalMoney)
    return (
        <>
            <InfoBar />
            <div className={classes["cart-container"]}>
                {cartItems.map((product,id) =>
                    <Card key={id} product={product} />
                    )}
            </div>
        </>
    )
}


export default CartPage