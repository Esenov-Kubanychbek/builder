import Drawer from "../Drawer/Drawer"
import Toolbar from "../Toolbar/Toolbar"
import classes from "./Loyout.module.css"


const Loyout = ({children})=>{
    return(
        <div className={classes.Loyout}>
            <Toolbar />
            <Drawer />
            {children}
        </div>
    )
}

export default Loyout;