import { useCallback, useEffect, useState } from "react"


import classes from "./Slider.module.css"
import {MdKeyboardArrowLeft} from "react-icons/md"
import {MdKeyboardArrowRight} from "react-icons/md"
import bgImage from "../../Images/sliderBack.png"

const Slider = ({ items }) =>{
    const [index,setIndex] = useState(0)
    const [rotate,setRotate] = useState(-15)
    const [loadedBg,setLoadedBg] = useState(false)

    const style={
        color:items[index].color,
        backgroundColor:items[index].bg,
        transform:`translate(-50%,-50%) rotate(${rotate}deg)`,
    }

    const indexChanger = useCallback((changer = 1) =>{
        setRotate(prev => prev * -1)
        if(index + changer === items.length){
            setIndex(0)
        }else if(index + changer < 0){
            setIndex(items.length - 1)
        }else{
            setIndex(prev => prev + changer)
        }
    },[index, items.length])

    useEffect(() =>{
        items.forEach((pictureObject) => {
            const img = new Image();
            img.src = pictureObject.img;
        })
    },[items])
    
    useEffect(()=>{
        const changerInterval = setInterval(() => {
            indexChanger()
        }, 3000);

        return () => clearInterval(changerInterval)
    },[index,indexChanger])

    return(
        <div className={classes["slider-container"]}>
            <img alt="" onLoad={() => setLoadedBg(true)} src={bgImage} className={classes["bg"]} />
            {loadedBg && <>
                <button onClick={() => indexChanger(-1)}>
                    <MdKeyboardArrowLeft style={{color:items[index].color}} className={classes["left-arrow"]} />
                </button>
                <div>
                    <h1 style={style} className={classes["slider-text"]}>
                        {items[index].text}
                    </h1>
                    <img src={items[index].img} className={classes["slider-img"]} alt="" />
                </div>
                <button onClick={() => indexChanger(1)}>
                    <MdKeyboardArrowRight style={{color:items[index].color}} className={classes["right-arrow"]} />
                </button>
                <a href="#special" style={{
                        color:items[index].bg,
                        backgroundColor:items[index].color,
                    }} 
                    className={classes["special-text"]}
                >SPECIAL OFFERS</a>
            </>}
        </div>
    )
}

export default Slider