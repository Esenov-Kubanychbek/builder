import Button from "../../UI/Button/Button";
import PizzaControl from "./PizzaControl/PizzaControl";
import classes from "./PizzaControls.module.css";
import { useState } from "react";

const PizzaControls = ({
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
    results.push(<PizzaControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        count={ingredients[ingredient]}
        type={ingredient} />)
  }
 const[display,setDisplay] = useState("none")
 const block = {
  display:display
 }
  return (
    <div className={classes.PizzaControls}>
      <strong>Ingredients</strong>





      <div>
        <input name="categories" id="fruit" type="radio"
        onChange={(e) => {
          e.target.value = "Fruit"
          setDisplay("block")
        }}
        />
        <label for="fruit">Fruit</label>

        <input name="categories" id="vagetables" type="radio"
        onChange={(e) => {
          e.target.value = "Fruit"
          setDisplay("none")
        }}/>
        <label for="vagetables">Vagetables</label>
      </div>




      <div style={block}>
        {results}
        <Button disabled={!total} onClick={startOrdering}>Order</Button>
      </div>
      
    </div>
  );
}

export default PizzaControls;