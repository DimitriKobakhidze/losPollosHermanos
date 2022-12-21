
import { useDispatch } from "react-redux"

import classes from "./CategoryItem.module.css"
import { cartActions } from "../Store/cart-slice"

const CategoryItem = ({ product, stylesFor=""}) =>{
    const dispatch = useDispatch()

    const addItem = () =>{
        dispatch(cartActions.addItem(product))
    }

    return(
        <div className={[classes["product-item"], classes[stylesFor]].join(' ')}>
            <img className={[classes["product-img"], classes[stylesFor]].join(' ')} src={product.img} />
            <div className={[classes["product-desc-container"], classes[stylesFor]].join(' ')}>
                <h2 className={[classes["product-title"], classes[stylesFor]].join(' ')}>{product.title}</h2>
                <h2 className={[classes["product-desc"], classes[stylesFor]].join(' ')}>Something about product</h2>
                <h2 className={[classes["product-price"], classes[stylesFor]].join(' ')}>Price: {product.price}$</h2>
                <button onClick={addItem} className={[classes["add-button"], classes[stylesFor]].join(' ')}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default CategoryItem