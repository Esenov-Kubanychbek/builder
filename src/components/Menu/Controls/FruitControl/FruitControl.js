import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import FruitIngredient from "../../FruitIngredient/FruitIngredient";
import classes from "./FruitControl.module.css";
import { add, remove } from "../../../../store/actions/builder";

const FruitControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.FruitControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        <FruitIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default FruitControl;