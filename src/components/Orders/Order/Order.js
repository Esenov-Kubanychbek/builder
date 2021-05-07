import classes from "./Order.module.css";

const Order = ({ name, phone, address, ingredients }) => {
  const output = Object.keys(ingredients).map(label => <em>{label}: - {ingredients[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li>Name: {name}</li>
      <li>Phone: {phone}</li>
      <li>Address: {address}</li>
      <li>Animal  pet  shop: {output}</li>
      <li><strong>Thanks for your purchase</strong></li>
    </ul>
  );
}

export default Order;