
import classes from "./CategoryItem.module.css"

const CategoryItem = ({ product, id}) =>{
    return(
        <div key={id} className={classes["product-item"]}>
            <img className={classes["product-img"]} src={product.img} />
            <div className={classes["product-desc-container"]}>
                <h2 className={classes["product-title"]}>{product.title}</h2>
                <h2 className={classes["product-desc"]}>Something about product</h2>
                <h2 className={classes["product-price"]}>Price: {product.price}$</h2>
                <button className={classes["add-button"]}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default CategoryItem