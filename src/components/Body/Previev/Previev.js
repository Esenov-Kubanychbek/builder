import Fruitingredient from "../Select/FruitControls/Fruitingredient/Fruitingredient"
import classes from "./Previev.module.css";
import korzina from "../../../images/korzina1.jpg"

const Previev = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<Fruitingredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.Previev}>
      
        <img
          className={classes.ingredients}
          src={korzina}/>
          {result}
        
     
      <div className={classes.price}>{price} som</div>
    </div>
  );
}

export default Previev;












// import classes from "./Previev.module.css";
// import korzina from "../../../images/korzina1.jpg"

// const Previev = () => {
//     return ( 
//         <div className={classes.Previev}>
//             <img className={classes.korzina} src={korzina} />

          
//         </div>
//      );
// }
 
// export default Previev;