import axios from "../../axios";
import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "./types";

export const add = (product) => ({
  type: ADD_INGREDIENT,
  product: product
});

export const remove = (product) => ({
  type: REMOVE_INGREDIENT,
  product: product
});

export const set = (data) => ({
  type: SET_INGREDIENTS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/default.json')
    .then(response => dispatch(set(response.data)));
}