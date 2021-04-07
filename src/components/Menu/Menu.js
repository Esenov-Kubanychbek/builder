import classes from "./Menu.module.css";
import Control from "./Control/Control"
import Previev from "./Previev/Previev"

const Menu = () => {
    return ( 
    <div className={classes.Menu}>
        <Previev/>
        <Control/>
    </div> );
}
 
export default Menu;