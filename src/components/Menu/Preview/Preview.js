import Product from "../Product/Product";

import classes from "./Preview.module.css";
import ingredientsBackground from "../../../images/korzina1.png";

const Preview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<Product key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.Preview}>
      <div className={classes.pizza}>
        <div
          className={classes.korzina}
          style={{ backgroundImage: `url(${ingredientsBackground})` }}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default Preview;