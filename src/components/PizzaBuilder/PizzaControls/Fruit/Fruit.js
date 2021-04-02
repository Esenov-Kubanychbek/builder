import PizzaIngredient from "../../PizzaIngredient/PizzaIngredient";
import classes from "./Fruit.module.css";

const Fruit = ({ type, add, remove }) => {
  return (
    <div className={classes.PizzaControl}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.ingredient}>
        <PizzaIngredient type={type} fixed />
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>
  );
}

export default Fruit;