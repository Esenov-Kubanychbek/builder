import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "../actions/types";

const initialState = {
  products: {
  },
  price: 0,
};
const prices = {
  bread: 35,
  oil: 40,
  grusha: 33,
  egg: 34,
  orange: 25,
  vinograd: 16,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_INGREDIENT:
      newState.products[action.product]++;
      newState.price += prices[action.product];
      break;
    case REMOVE_INGREDIENT:
      newState.products[action.product]--;
      newState.price -= prices[action.product];
      break;
    case SET_INGREDIENTS:
      return { ...action.data };
  
    default:
      break;
  }

  return newState;
}

export default builder;