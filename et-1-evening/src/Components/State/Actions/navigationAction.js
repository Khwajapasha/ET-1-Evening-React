export const navigationAction = (id, linkName, link) => {
  return {
    type: "ADD_NAVLINK",
    payload: { id, linkName, link },
  };
};

// return {
//   type: "ADD_NAVLINK",
//   data: {},
// };
