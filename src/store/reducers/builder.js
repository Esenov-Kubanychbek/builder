import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../actions/types";


const initialState = {
    ingredients: {
      bread: 10,
      oil: 10,
      grusha: 10,
      egg: 10,
      orange: 10,
      vinograd: 10,
    },
    price: 200,
  };
  const prices = {
    bread: 3.5,
    oil: 4,
    grusha: .3,
    egg: .3,
    orange: 2,
    vinograd: 1,
  };
  
  const builder= (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case ADD_INGREDIENT:
        newState.ingredients[action.ingredient]++;
        newState.price += prices[action.ingredient];
        break;
        case REMOVE_INGREDIENT:
        newState.ingredients[action.ingredient]--;
        newState.price -= prices[action.ingredient];
        break;
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default builder;