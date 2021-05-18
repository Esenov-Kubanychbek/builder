import Preview from "./Preview/Preview";
import Controls from "./Controls/Controls";
import withAxios from "../withAxios";
import axios from "../../axios";
import classes from "./Menu.module.css";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";

const Menu = ({ history }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.builder.products);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push('/checkout');
  }

  return (
    <div className={classes.Menu}>
      <Preview
        products={products}
        price={price} />
      <Controls
        products={products}
        startOrdering={startOrdering}
      />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
        <div className={classes.orderSummary}>
          <OrderSummary
            products={products}
            price={price}
          />
          <div className={classes.button}>
            <Button onClick={finishOrdering} green="green">Checkout</Button>
            <Button onClick={stopOrdering}>Cancel</Button>
          </div>

        </div>

      </Modal>
    </div>
  );
}

export default withAxios(Menu, axios);