import Button from "../../UI/Button/Button";
import FruitControl from "./FruitControl/FruitControl";
import classes from "./Controls.module.css";
import { useState } from "react";



const Controls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  startOrdering
  
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    // Add ingredient number to totals number
    total += ingredients[ingredient];
    // Render pizza control for this ingredient
    results.push(<FruitControl 
      key={ingredient}
      add={addIngredient}
      remove={removeIngredient}
      count={ingredients[ingredient]}
      type={ingredient}/>)
  }

const[choose,setChoose] = useState("none")
const[choose1,setChoose1] = useState("block")

const fruits = {
  display:choose
}

  return (
    <div className={classes.Controls}>
      
      <div className={classes.categories}>
        <input type="radio" id="fruit" name="categories"
      onChange={(e)=>{
        e.target.value = "Fruit"
        setChoose("block")
        setChoose1("none")
      }} /> 
      <label for="fruit">Fruit</label>
        <input type="radio" id="vegetables" name="categories"
          onChange={(e)=>{
          e.target.value = "Vegetables"
          setChoose("block")
          setChoose1("none")
        }} />
        <label for="vegetables">Vegetables</label>
      </div>
     <br/>
      
      <div style={fruits}>Product{results}</div>
      
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default Controls;