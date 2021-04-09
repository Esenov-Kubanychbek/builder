import React from "react";

import classes from "./Fruitingredient.module.css";
import ananas from "../../../../../images/fruit/ananas.svg"
import banana from "../../../../../images/fruit/banana.png";
import grusha from "../../../../../images/fruit/grusha.svg";
import lemon from "../../../../../images/fruit/lemon.png";
import orange from "../../../../../images/fruit/orange.svg";
import vino from "../../../../../images/fruit/vino.svg";

const Fruitngredient = ({ type, fixed }) => {
  const types = {
    ananas: { backgroundImage: `url(${ananas})`, width: "35px", height: "35px" },
    banana: { backgroundImage: `url(${banana})`, width: "35px", height: "35px" },
    grusha: { backgroundImage: `url(${grusha})`, width: "10px", height: "10px" },
    lemon: { backgroundImage: `url(${lemon})`, width: "10px", height: "10px" },
    orange: { backgroundImage: `url(${orange})`, width: "20px", height: "20px" },
    vino: { backgroundImage: `url(${vino})`, width: "40px", height: "40px" },
  };


//   Get random position for this ingredient.
  if (!fixed) {
    const position = types[type].width;
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random())}deg)`;

  return (
    <div className={classes.Fruitingredient} style={types[type]}></div>
  );
}

export default React.memo(Fruitngredient);