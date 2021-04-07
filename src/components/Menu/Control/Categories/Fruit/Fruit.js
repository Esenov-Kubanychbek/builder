import React from "react";

import classes from "./Fruit.module.css";
import ananas from "../../../../../images/fruit/ananas.svg";
import banana from "../../../../../images/fruit/banana.png";
import grusha from "../../../../../images/fruit/grusha.svg";
import lemon from "../../../../../images/fruit/lemon.png";
import orange from "../../../../../images/fruit/orange.svg";
import vino from "../../../../../images/fruit/vino.svg";

const Fruit = ({ type, fixed }) => {
  const types = {
    ananas: { backgroundImage: `url(${ananas})`, width: "35px", height: "35px" },
    grusha: { backgroundImage: `url(${grusha})`, width: "35px", height: "35px" },
    banana: { backgroundImage: `url(${banana})`, width: "10px", height: "10px" },
    lemon: { backgroundImage: `url(${lemon})`, width: "10px", height: "10px" },
    orange: { backgroundImage: `url(${orange})`, width: "20px", height: "20px" },
    vino: { backgroundImage: `url(${vino})`, width: "40px", height: "40px" },
  };

  function getPosition(ingredientWidth) {
    

    const ingredientTop = Math.round(Math.random());
    const ingredientLeft = Math.round(Math.random() );

    const distance = Math.sqrt(
      Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
    ) + ingredientRadius;

    return distance < pizzaRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.PizzaIngredient} style={types[type]}></div>
  );
}

export default React.memo(Fruit);