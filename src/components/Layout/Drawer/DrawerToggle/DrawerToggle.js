
import classes from "./DrawerToggle.module.css";

const DrawerToggle = ({setdrawerOpen}) => {
    return (
        <div className={classes.DrawerToggle} onClick={() => setdrawerOpen(true)}>
            
        </div>
    );
}

export default DrawerToggle;