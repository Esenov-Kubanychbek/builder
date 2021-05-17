import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price }) => {
  const labels = {
    bread: "Bread",
    egg: "Egg",
    oil: "Oil",
    grusha: "Grusha",
    orange: "Orange",
    vinograd: "Vinograde",
  }
  const results = Object.keys(ingredients)
    .map(type => <li key={type}>{labels[type]}: {ingredients[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h2>Order summary</h2>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;