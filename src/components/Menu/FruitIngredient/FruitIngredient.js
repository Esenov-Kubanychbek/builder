import React from "react";

import classes from "./FruitIngredient.module.css";
import salamiBackground from "../../../images/bread.svg";
import tomatoBackground from "../../../images/oil.svg";
import blackOliveBackground from "../../../images/fruit/grusha.svg";
import greenOliveBackground from "../../../images/egg.svg";
import redPepperBackground from "../../../images/fruit/orange.svg";
import yellowPepperBackground from "../../../images/fruit/vino.svg";

const FruitIngredient = ({ type, fixed }) => {
  const types = {
    salami: { backgroundImage: `url(${salamiBackground})`, width: "35px", height: "35px" },
    tomato: { backgroundImage: `url(${tomatoBackground})`, width: "35px", height: "35px" },
    blackOlive: { backgroundImage: `url(${blackOliveBackground})`, width: "40px", height: "30px",margin: "-2px -10px" },
    greenOlive: { backgroundImage: `url(${greenOliveBackground})`, width: "20px", height: "20px" },
    redPepper: { backgroundImage: `url(${redPepperBackground})`, width: "20px", height: "20px" },
    yellowPepper: { backgroundImage: `url(${yellowPepperBackground})`, width: "30px", height: "30px" },
  };


  return (
    <div className={classes.FruitIngredient} style={types[type]}></div>
  );
}

export default React.memo(FruitIngredient);