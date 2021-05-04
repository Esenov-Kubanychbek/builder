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


  return (
    <div className={classes.Controls}>
      
     
       
        
      <h3>Product</h3>
   {results}
      
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default Controls;