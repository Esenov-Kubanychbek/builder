import Preview from "./Preview/Preview";
import Controls from "./Controls/Controls";
import {  useState } from "react";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import Button from"../UI/Button/Button";

import classes from "./Menu.module.css";
import { useSelector } from "react-redux";

const Menu = ({history}) => {
  



  const ingredients = useSelector(state => state.builder.ingredients);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);



  // const [canBuy, setCanBuy] = useState(true);


  

  // function checkCanBuy(newSatellites) {
  //   const totalSatellites = Object.values(newSatellites)
  //     .reduce((total, current) => total + current);
  //   setCanBuy(totalSatellites > 0);
  // }


  

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
        ingredients={ingredients}
        price={price}
      />

      
      <Modal show={ordering} cancel={stopOrdering}>
        
        <Button onClick={finishOrdering} >Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
        <OrderSummary ingredients={ingredients} price={price} />
      </Modal>
      <Controls
        startOrdering={startOrdering}
        ingredients={ingredients}
        price={price}
      />
    </div>
  );
}

export default Menu;