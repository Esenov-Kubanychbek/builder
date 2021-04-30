import Button from "../../../UI/Button/Button";
import Vegetablesingr from "../../Vegetablesingr/Vegetablesingr";
import classes from "./VegetablesControl.module.css";

const VegetablesControl = ({ type, add, remove, count }) => {
  return (
    <div className={classes.FruitControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <Vegetablesingr type={type} fixed />
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default VegetablesControl;