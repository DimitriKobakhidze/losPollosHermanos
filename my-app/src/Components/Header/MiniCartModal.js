import ReactDOM from "react-dom"
import { useSelector } from "react-redux"


import classes from "./MiniCartModal.module.css"
import CategoryItem from "../../UI/CategoryItem"
import InfoBar from "../../UI/InfoBar"
import {IoIosAddCircle,IoIosRemoveCircle} from "react-icons/io"
import { cartActions } from "../../Store/cart-slice"
import { useDispatch } from "react-redux"

const ModalOverlay = () =>{
    return(
        <div className={classes["overlay"]}></div>
    )
}

const MiniCart = () =>{
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    const changeCount = (changer,id) =>{
        dispatch(cartActions.changeAmount({changer,id}))
    }

    return(
        <div className={classes["cart-container"]}>
            <InfoBar styleFor="mini" />
            {cartItems.map((product,id) =>
                <div className={classes["wrapper"]}>
                    <CategoryItem key={id} product={product} stylesFor="mini" />
                    <div className={classes["changer"]}>
                        <h2>{`${product.count}X`}</h2>
                        <button onClick={() => changeCount(-1,product.id)}>
                            <IoIosRemoveCircle className={classes["icon"]} />
                        </button>
                        <button onClick={() => changeCount(1,product.id)}>
                            <IoIosAddCircle className={classes["icon"]} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

const MiniCartModal = () =>{
    return(
        <>
            {ReactDOM.createPortal(<ModalOverlay />,document.getElementById("overlay"))}
            {ReactDOM.createPortal(<MiniCart />,document.getElementById("cart-portal"))}
        </>
    )
}

export default MiniCartModal