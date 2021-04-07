import Button from "../../UI/Button/Button";
import PizzaControl from "./PizzaControl/PizzaControl";
import classes from "./PizzaControls.module.css";
import Control from "../Controls/Controls"



const PizzaControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  canBuy,
  setIsBuying
}) => {
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
      <Control/>
      
      {results}
      <Button
        onClick={() => setIsBuying(true)}
        disabled={!canBuy}>
          Order
      </Button>
    </div>
  );
}

export default PizzaControls;