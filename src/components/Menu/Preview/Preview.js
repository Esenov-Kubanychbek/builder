import FruitIngredient from "../FruitIngredient/FruitIngredient";
import classes from "./Preview.module.css";
import korzina from "../../../images/korzina1.png"


const Preview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<FruitIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.Preview}>
      <div className={classes.menus}>
        <div style={{backgroundImage:`url(${korzina})`,backgroundSize:"cover",width:"220px",height:"320px",transform:"scale(0.9)"}}  >
          <div className={classes.result}>
            {result}
          </div>
          
         </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default Preview;