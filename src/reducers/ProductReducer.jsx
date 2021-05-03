import { GET_PRODUCTS } from "../types";
import data from "../api/data";
const initialState = data;

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};
