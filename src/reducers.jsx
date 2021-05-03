import { combineReducers } from "redux";
import { CartReducer } from "./reducers/CartReducer";
import { ProductReducer } from "./reducers/ProductReducer";

export const rootReducer = combineReducers({
  cart: CartReducer,
  products: ProductReducer,
});
