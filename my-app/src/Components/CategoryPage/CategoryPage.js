import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import classes from "./CategoryPage.module.css"
import CategoryItem from "../../UI/CategoryItem"
import bg from "../../Images/3949227.jpg"
import { getShopData } from "../../Store/shop-slice"
import Loader from "../../UI/Loader"

const CategoryPage = () =>{
    const { name } = useParams()
    const [loaded,setLoaded] = useState(false)
    const categoryItems = useSelector(state => state.shop.categoryItems)
    const dispatch = useDispatch()

    useEffect(() => {
        console.time()
        dispatch(getShopData(`categories/${name}/products`,'category'))
        console.timeEnd()
        setLoaded(true)
    },[dispatch,name])

    return(
        <>
            <img src={bg} className={classes["bg"]} />
            {categoryItems.length > 0 &&
                <div className={classes["container"]}>
                    {categoryItems.map((product,id) =>
                        <CategoryItem key={id} product={product} /> 
                    )}
                </div>
            }
            {!loaded &&
                <div className="page-load-wrapper">
                    <Loader manualStyles={{width:"75px",height:"75px"}} />
                </div>
            }
        </>
    )
}

export default CategoryPage