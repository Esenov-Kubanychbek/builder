
import classes from "../Drawer.module.css"


const Drawer = ({children})=>{
    return(
        <div className={classes.Drawer}>
            Drawer
            {children}
        </div>
    )
}

export default Drawer;