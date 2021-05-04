import Preview from "./Preview/Preview";
import Controls from "./Controls/Controls";

import classes from "./Menu.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";

const Menu = ({ history }) => {
  const prices = {
    tomato: 3.5,
    salami: 4,
    greenOlive: .3,
    blackOlive: .3,
    redPepper: 2,
    yellowPepper: 1,
  }
  const ingredients = useSelector(state => state.ingredients)
  const price = useSelector(state => state.price)

  const [ordering, setOrdering] = useState(false);

  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder-bb694-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);

  //       // For arrays
  //       // setIngredients(Object.values(response.data.ingredients));
  //       // For objects
  //       setIngredients(response.data.ingredients);
  //     });
  // }


  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    axios
      .post('https://builder-bb694-default-rtdb.firebaseio.com/orders.json', {
        ingredients: ingredients,
        price: price
      })
      .then(() => {
        setOrdering(false);
        // loadDefaults();
        history.push('/checkout');
      });
  }

  return (
    <div className={classes.Menu}>
      <Preview
        ingredients={ingredients}
        price={price} />
      
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            ingredients={ingredients}
            price={price}
            />
          <Button onClick={finishOrdering} green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
        <Controls
        ingredients={ingredients}
        startOrdering={startOrdering}
        />
    </div>
  );
}

export default Menu;