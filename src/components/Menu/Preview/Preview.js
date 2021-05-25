import Product from "../Product/Product";

import classes from "./Preview.module.css";
import ingredientsBackground from "../../../images/korzina1.png";

const Preview = ({ products, price }) => {
  const result = [];
  for (const product in products) {
    for (let i = 0; i < products[product]; i++) {
      result.push(<Product key={product + i} type={product} />)
    }
  }

  return (
    <div className={classes.Preview}>
      <div className={classes.menus}>
        <div
          className={classes.korzina}
          style={{ backgroundImage: `url(${ingredientsBackground})`, transform:"scale(1.3)" }}>
            <div className={classes.product}>
            {result}
            </div>
        </div>
        
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default Preview;