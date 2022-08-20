import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { navigationReducer } from "../Reducers/NavigationReducer";
import { carouselReducer } from "../Reducers/carouselReducer";
import { courseReducer } from "../Reducers/courseReducer";
import { ProductsReducer } from "../Reducers/ProductsReducers";
export const store = createStore(
  combineReducers({
    navigationReducer,
    carouselReducer,
    courseReducer,
    ProductsReducer,
  }),
  composeWithDevTools()
);

//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
