// const intialSate = {
//   data: [],
// };
export const ProductsReducer = (state = [], action) => {
  if (action.type === "ADD_PRODUCTS") {
    return {
      ...state,
      state: action.payload,
    };
  }
  return state;
};
