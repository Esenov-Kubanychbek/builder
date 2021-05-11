import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
import Product from "../../Product/Product";
import classes from "./Control.module.css";

const Control = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.Control}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        <Product type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default Control;