import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { shopActions } from "../../Store/shop-slice"

import classes from "./CategoryPage.module.css"
import CategoryItem from "../../UI/CategoryItem"
import bg from "../../Images/3949227.jpg"
import { getShopData } from "../../Store/shop-slice"
import Loader from "../../UI/Loader"

const CategoryPage = () =>{
    const bgRef = useRef()
    const { name } = useParams()
    const loading = useSelector(state => state.shop.loading)
    const categoryItems = useSelector(state => state.shop.categoryItems)
    const dispatch = useDispatch()
    //counting loaded images that should be shown in category page, including background image
    const [loadedImages,setLoadedImages] = useState(0)
    const [bgLoaded,setBgLoaded] = useState(false)

    const handleBgLoad = () =>{
        setBgLoaded(true)
    }
    useEffect(() => {
        dispatch(getShopData(`categories/${name}/products`,'category'))
        //if next route has same bg, it wont be loaded again so onLoad function wont fire again
        // causing loadedImages to not increase and will show constantly loading spinner
        // for this chekcing if it is already complete with ref
        if(bgRef.current.complete){
            setBgLoaded(true)
        }
        return () =>{
            dispatch(shopActions.setItems({type:"category",items:[]}))
            dispatch(shopActions.setLoading({loading:true}))
            setLoadedImages(0)
        }
    },[dispatch,name])

 

    console.log(loadedImages,categoryItems,loading)
    return(
        <>
            <img src={bg} className={classes["bg"]} onLoad={handleBgLoad} ref={bgRef} />
            {categoryItems.length > 0 && 
                <div className={classes["container"]}>
                    {categoryItems.map((product,id) =>
                        <CategoryItem key={id} product={product} setLoadedImages={setLoadedImages} /> 
                    )}
                </div>
            }
            {(loading || loadedImages != categoryItems.length || !bgLoaded) &&
                <div className="page-load-wrapper">
                    <Loader manualStyles={{width:"75px",height:"75px"}} />
                </div>
            }
        </>
    )
}

export default CategoryPage