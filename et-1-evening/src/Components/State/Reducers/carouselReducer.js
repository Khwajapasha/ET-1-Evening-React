const initState = {
  carouselData: [
    {
      id: 1,
      carsouelImg:
        "https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?s=170667a",
      carouselTitle: "HTML",
      carouselDesc: "This is carousel one",
    },
    {
      id: 2,
      carsouelImg:
        "https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&w=1000&q=80",
      carouselTitle: "CSS",
      carouselDesc: "This is carousel two",
    },
  ],
};
export const carouselReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CAROUSEL":
      return {
        ...state,
        carouselData: [...state.carouselData, action.data],
      };
    default:
      return state;
  }
};
