import PizzaControl from "./PizzaControl/PizzaControl";
import Fruit from "./Fruit/Fruit";
import classes from "./PizzaControls.module.css";

const PizzaControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<PizzaControl
      key={ingredient}
      add={addIngredient}
      remove={removeIngredient}
      type={ingredient} />)
  }
 
  
  
  return (
    <div className={classes.PizzaControls}>
      <strong>Ingredients</strong>
      
      <select>

        <option value="pizza"> PizzaControls</option>
        <option value="fruit">Fruit</option>  
      </select>
      {results}
    </div>
  );
}


export default PizzaControls;