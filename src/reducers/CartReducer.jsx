import { ADD_PRODUCT, REMOVE_PRODUCT } from "../types";
const initialState = { items: [] };

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const isProductAdded = state.items.find(
        (item) => action.payload.id === item.id
      );
      return {
        ...state,
        items: isProductAdded
          ? state.items.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })
          : [action.payload, ...state.items],
      };
    }

    case REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
