import { useState } from "react";
import classes from "./Select.module.css";
import FruitControls from "./FruitControls/FruitControls"
import VegetablesControls from "./VegetablesControls/VegetablesControls"
import Previev from "../Previev/Previev";

const Select = () => {
//         const prices = {
//       tomato: 3.5,
//       salami: 4,
//       greenOlive: .3,
//       blackOlive: .3,
//       redPepper: 2,
//       yellowPepper: 1,
//     };
//     const [ingredients, setIngredients] = useState({
//       tomato: 1,
//       salami: 1,
//       greenOlive: 1,
//       blackOlive: 1,
//       redPepper: 1,
//       yellowPepper: 1,
//     });
//     const [price, setPrice] = useState(0);
  
  
//     function addIngredient(type) {
//       const newIngredients = { ...ingredients };
//       newIngredients[type]++;
//       setPrice(price + prices[type]);
//       setIngredients(newIngredients);
//     }
  
//     function removeIngredient(type) {
//       if (ingredients[type]) {
//         const newIngredients = { ...ingredients };
//         newIngredients[type]--;
//         setPrice(price - prices[type]);
//         setIngredients(newIngredients);
//       }
//     }





    const [categories,setCategories] = useState("Fruit")
    let result = ""
    if (categories == "Fruit"){
        result =  [<FruitControls
            // ingredients={ingredients}
            // addIngredient={addIngredient}
            // removeIngredient={removeIngredient}
            />,
            // <Previev 
            // // ingredients={ingredients}
            // // price={price} 
            // />
        ]
     }
     else if (categories == "Vegetables"){
        result = <VegetablesControls/>
    }
    function changes(event) {
        setCategories (event.target.value)
    }
    return ( 
        <div className={classes.Select}>
            <select onChange={changes}>
                <option>Fruit</option>
                <option>Vegetables</option>
            </select>
            {categories}
        </div>
     );
}
 
export default Select;

