const initialState = {
  navData: [
    { id: 1, linkName: "Home", link: "https://www.google.com" },
    { id: 2, linkName: "About", link: "" },
    { id: 3, linkName: "Services", link: "" },
    { id: 4, linkName: "Contact Us", link: "" },
  ],
};
export const navigationReducer = (state = initialState, action) => {
  if (action.type === "ADD_NAVLINK") {
    return {
      ...state,
      navData: [...state.navData, action.payload],
    };
  } else {
    return state;
  }
};

// if (action.type === "FIRST_ACTION") {
//   return {
//     ...state,
//     navData: [action.data, ...state.navData],
//   };
// } else {}
// return state;
