import React from "react";

import classes from "./Vegetables.module.css";
import kapusta from "../../../../../images/vegetables/kapusta.svg";
import markov from "../../../../../images/fruit/markov.png";
import kukuruza from "../../../../../images/fruit/kukuruza.svg";
import paper from "../../../../../images/fruit/paper.png";
import luk from "../../../../../images/fruit/luk.svg";
import tomato from "../../../../../images/fruit/tomato.svg";

const Vegetables = ({ type, fixed }) => {
  const types = {
    kapusta: { backgroundImage: `url(${kapusta})`, width: "35px", height: "35px" },
    markov: { backgroundImage: `url(${markov})`, width: "35px", height: "35px" },
    kukuruza: { backgroundImage: `url(${kukuruza})`, width: "10px", height: "10px" },
    paper: { backgroundImage: `url(${paper})`, width: "10px", height: "10px" },
    luk: { backgroundImage: `url(${luk})`, width: "20px", height: "20px" },
    tomato: { backgroundImage: `url(${tomato})`, width: "40px", height: "40px" },
  };

  function getPosition(ingredientWidth) {
    

    const ingredientTop = Math.round(Math.random());
    const ingredientLeft = Math.round(Math.random() );

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

export default React.memo(Vegetables);