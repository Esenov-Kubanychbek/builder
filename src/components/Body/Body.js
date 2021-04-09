import classes from "./Body.module.css";
import Select from "./Select/Select"
import Previev from "./Previev/Previev"



const Body = () => {
    return ( 
        <div className={classes.Body}>
            <Previev/>
            <Select/>
        </div>
     );
}
 
export default Body;




