import Fruitingredient from "../Fruitingredient/Fruitingredient";
import classes from "./FruitControl.module.css";
import Button from "../../../../UI/Button/Button"

const FruitControl = ({ type, add, remove, count }) => {
  return (
    <div className={classes.FruitControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <Fruitingredient type={type} fixed />
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default FruitControl;