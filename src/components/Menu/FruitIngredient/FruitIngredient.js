import React from "react";

import classes from "./FruitIngredient.module.css";
import bread from "../../../images/bread.svg";
import oil from "../../../images/oil.svg";
import grusha from "../../../images/fruit/grusha.svg";
import egg from "../../../images/egg.svg";
import orange from "../../../images/fruit/orange.svg";
import vinograd from "../../../images/fruit/vino.svg";

const FruitIngredient = ({ type, fixed }) => {
  const types = {
    bread: { backgroundImage: `url(${bread})`, width: "35px", height: "35px" },
    oil: { backgroundImage: `url(${oil})`, width: "35px", height: "35px" },
    grusha: { backgroundImage: `url(${grusha})`, width: "40px", height: "30px",margin: "-2px -10px" },
    egg: { backgroundImage: `url(${egg})`, width: "20px", height: "20px" },
    orange: { backgroundImage: `url(${orange})`, width: "20px", height: "20px" },
    vinograd: { backgroundImage: `url(${vinograd})`, width: "30px", height: "30px" },
  };



  function getPosition(ingredientWidth) {
    const fixingDiameter = 360;
    const fixingRadius = fixingDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * fixingDiameter);
    const ingredientLeft = Math.round(Math.random() * fixingDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - fixingRadius, 2) + Math.pow(ingredientLeft - fixingRadius, 2)
    ) + ingredientRadius;

    return distance < fixingRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    console.log(types)
    console.log(type)
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;


  return (
    <div className={classes.FruitIngredient} style={types[type]}></div>
  );
}

export default React.memo(FruitIngredient);