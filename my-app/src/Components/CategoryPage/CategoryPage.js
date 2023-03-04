import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { shopActions } from "../../Store/shop-slice"

import classes from "./CategoryPage.module.css"
import CategoryItem from "../../UI/CategoryItem"
import bg from "../../Images/3949227.jpg"
import { getShopData } from "../../Store/shop-slice"
import Loader from "../../UI/Loader"

const CategoryPage = () =>{
    const { name } = useParams()
    const loading = useSelector(state => state.shop.loading)
    const categoryItems = useSelector(state => state.shop.categoryItems)
    const dispatch = useDispatch()
    //counting loaded images that should be shown in category page, including background image
    const [loadedImages,setLoadedImages] = useState(0)
    const [test,setTest] = useState(0)

    useEffect(() => {
        dispatch(getShopData(`categories/${name}/products`,'category'))

        return () =>{
            dispatch(shopActions.setItems({type:"category",items:[]}))
            dispatch(shopActions.setLoading({loading:true}))
            setLoadedImages(0)
        }
    },[dispatch,name])

    // useEffect(() =>{
    //     //when url params change, it means user moved to new category page 
    //     // so loadedImagesState must be reset to 0 with useffect cause without it, state will remain same
    //     // as it was at the end of previous category page 
    //     setLoadedImages(0)
    // },[name])

    console.log(loadedImages)
    return(
        <>
            <img src={bg} className={classes["bg"]}/>
            {categoryItems.length > 0 && 
                <div className={classes["container"]}>
                    {categoryItems.map((product,id) =>
                        <CategoryItem key={id} product={product} setLoadedImages={setLoadedImages} /> 
                    )}
                </div>
            }
            {(loading || loadedImages != categoryItems.length) &&
                <div className="page-load-wrapper">
                    <Loader manualStyles={{width:"75px",height:"75px"}} />
                </div>
            }
        </>
    )
}

export default CategoryPage