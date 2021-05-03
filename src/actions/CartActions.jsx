import { ADD_PRODUCT, REMOVE_PRODUCT } from "../types";

export const addToCart = (item) => {
  return {
    type: ADD_PRODUCT,
    payload: item,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: productId,
  };
};
