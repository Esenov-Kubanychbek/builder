import Button from "../../UI/Button/Button";
import Control from "./Control/Control";
import classes from "./Controls.module.css";

const Controls = ({
  products,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const product in products) {
    // Add product number to totals number
    total += products[product];
    // Render pizza control for this ingredient
    results.push(<Control
        key={product}
        count={products[product]}
        type={product} />)
  }

  return (
    <div className={classes.Controls}>
     <h2>Product</h2> 
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default Controls;