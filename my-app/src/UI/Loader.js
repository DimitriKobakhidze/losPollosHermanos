
import classes from "./Loader.module.css"


const Loader = ({ manualStyles }) => <div style={manualStyles || {}} className={classes["loader"]} />

export default Loader