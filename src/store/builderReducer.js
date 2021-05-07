const initialState = {
    ingredients: {
      bread: 10,
      oil: 10,
      grusha: 10,
      egg: 10,
      orange: 10,
      vinograde: 10,
    },
    price: 200,
  };
  const prices = {
    bread: 3.5,
    oil: 4,
    grusha: .3,
    egg: .3,
    orange: 2,
    vinograde: 1,
  };
  
  const builderReducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "ADD_INGREDIENT":
        newState.ingredients[action.ingredient]++;
        newState.price += prices[action.ingredient];
        break;
      case "REMOVE_INGREDIENT":
        newState.ingredients[action.ingredient]--;
        newState.price -= prices[action.ingredient];
        break;
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default builderReducer;