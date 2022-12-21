import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import classes from "./CategoryPage.module.css"
import CategoryItem from "./CategoryItem"
import bg from "../../Images/3949227.jpg"
import { getShopData } from "../../Store/shop-slice"

const CategoryPage = () =>{
    const { name } = useParams()

    const [data,setData] = useState({})
    const [load,setLoad] = useState(false)
    const categoryItems = useSelector(state => state.shop.categoryItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getShopData(`categories/${name}/products`,'category'))
    },[dispatch])

 
    return(
        <>
            <img onLoad={() => setLoad(true)} src={bg} className={classes["bg"]} loading="lazy" />
            {load && categoryItems.length > 0 &&
                <div className={classes["container"]}>
                    {categoryItems.map((product,id) =>
                        <CategoryItem key={id} product={product} /> 
                    )}
                </div>
            }
        </>
    )
}

export default CategoryPage