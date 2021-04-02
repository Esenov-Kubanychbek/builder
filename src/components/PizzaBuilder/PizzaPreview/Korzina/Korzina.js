import PizzaIngredient from "../../Fruitingredient/Fruitingredient";
import classes from "./Kozina.module.css";

const PizzaPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<PizzaIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.PizzaPreview}>
      <div className={classes.ingredients}>
        
          {result}
        
      </div>
    </div>
  );
}

export default PizzaPreview;