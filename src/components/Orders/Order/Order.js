import classes from "./Order.module.css";

const Order = ({ name, phone, address, products, price }) => {
  const output = Object.keys(products).map(label =>
    <em key={label}>
      <strong> {label}:</strong> -
      {products[label]}
    </em>)

  return (
    <ul className={classes.Order}>
      <li><span>Name:</span> {name}</li>
      <li><span>Phone:</span> {phone}</li>
      <li><span>Address:</span> {address}</li>
      <li><span>Your satellites:</span>  {output}</li>
      <li><span>Price:</span> {price}</li>
    </ul>
    
  );
}

export default Order;