import FruitControl from "./FruitControl/FruitControl";
import classes from "./FruitControls.module.css";

const FruitControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
}) => {
  const results = [];
  for (const ingredient in ingredients) {
    // Add ingredient number to totals number
    // Render pizza control for this ingredient
    results.push(<FruitControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        count={ingredients[ingredient]}
        type={ingredient} />)
  }

  return (
    <div className={classes.FruitControls}>
      <strong>Ingredients</strong>
      {results}
    </div>
  );
}

export default FruitControls;