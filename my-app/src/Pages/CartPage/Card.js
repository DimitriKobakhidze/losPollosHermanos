import { useDispatch } from "react-redux"

import classes from "./Card.module.css"
import CategoryItem from "../../UI/CategoryItem"
import {IoIosAddCircle,IoIosRemoveCircle} from "react-icons/io"
import { cartActions } from "../../Store/cart-slice"

const Card = ({ product }) =>{
    const dispatch = useDispatch()

    const changeCount = changer =>{
        dispatch(cartActions.changeAmount({changer,id:product.id}))
    }
    return(
        <div className={classes["wrapper"]}>
            <CategoryItem product={product} stylesFor="cart" />
            <div className={classes["changer-div"]}>
                <div className={classes["total-div"]}>
                    <h2>{`Total: ${product.totalPrice}$`}</h2>
                    <h2>{`Items: ${product.count}`}</h2>
                </div>
                <div className={classes["button-div"]}>
                    <button onClick={() => changeCount(-1)}>
                        <IoIosRemoveCircle className={classes["icon"]}/>
                    </button>
                    <button onClick={() => changeCount(1)}>
                        <IoIosAddCircle className={classes["icon"]}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card