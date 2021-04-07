import classes from "./Controls.module.css";
import {useState} from "react";
import PizzaControls from "../PizzaControls/PizzaControls"
import Fruit from "../Fruit/Fruit"


const Controls = () => {
    
    const [example,setExample] = useState("Example1")

  let result = ""
  if (example === "Pizza"){
    result = <PizzaControls/>
  }
  else if (example === "Fruit"){
    result = <Fruit/>
  }
  function changes(event) {
    setExample (event.target.value)
  }
    return ( 
        <div className={classes.Control}>
            <select onChange={changes}>
                <option> Pizza</option>
                <option>Fruit</option>
            </select>
        </div>
     );
}
 
export default Controls;