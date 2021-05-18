import React from "react";

import classes from "./Product.module.css";
import bread from "../../../images/bread.svg";
import egg from "../../../images/egg.svg";
import oil from "../../../images/oil.svg";
import grusha from "../../../images/fruit/grusha.svg";
import orange from "../../../images/fruit/orange.svg";
import vinograd from "../../../images/fruit/vino.svg";

const Product = ({ type, fixed }) => {
  const types = {
    bread: { backgroundImage: `url(${bread})`, width: "35px", height: "35px" },
    egg: { backgroundImage: `url(${egg})`, width: "25px", height: "25px" },
    oil: { backgroundImage: `url(${oil})`, width: "30px", height: "30px" },
    grusha: { backgroundImage: `url(${grusha})`, width: "50px", height: "40px" },
    orange: { backgroundImage: `url(${orange})`, width: "20px", height: "20px" },
    vinograd: { backgroundImage: `url(${vinograd})`, width: "40px", height: "40px" },
  };

  function getPosition(ingredientWidth) {
    const pizzaDiameter = 225;
    const pizzaRadius = pizzaDiameter / 2.8;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * pizzaDiameter);
    const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - pizzaRadius, 1) + Math.pow(ingredientLeft - pizzaRadius, 2)
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
  // Get random rotation for this ingredient.;
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.Product} style={types[type]}></div>
  );
}

export default React.memo(Product);