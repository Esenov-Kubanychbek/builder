import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import FruitIngredient from "../../FruitIngredient/FruitIngredient";
import classes from "./FruitControl.module.css";

const FruitControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.FruitControl}>
      <Button onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>
      <div className={classes.ingredient}>
        <FruitIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
    </div>
  );
}

export default FruitControl;