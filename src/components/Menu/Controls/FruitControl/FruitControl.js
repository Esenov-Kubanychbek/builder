import Button from "../../../UI/Button/Button";
import FruitIngredient from "../../FruitIngredient/FruitIngredient";
import classes from "./FruitControl.module.css";

const FruitControl = ({ type, add, remove, count }) => {
  return (
    <div className={classes.FruitControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <FruitIngredient type={type} fixed />
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default FruitControl;