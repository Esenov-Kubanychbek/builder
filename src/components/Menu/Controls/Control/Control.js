import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
import classes from "./Control.module.css";

const Control = ({ type, count }) => {
  const dispatch = useDispatch();

  const names = {
    bread:"Bread",
    egg: "Egg",
    oil: "Oil",
    grusha: "Pear",
    orange: "Orange",
    vinograd: "Grapes"
  }
  return (
    <div className={classes.Control}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>

        {names[type]}
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default Control;