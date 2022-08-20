const preLoadData = {
  courseData: [
    {
      id: 1,
      courseImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      courseTitle: "React",
      courseDesc: "JS Library by facebook",
    },
    {
      id: 2,
      courseImg:
        "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
      courseTitle: "Javascript",
      courseDesc: "Scripting Language",
    },
    {
      id: 3,
      courseImg:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
      courseTitle: "HTML",
      courseDesc: "Cascding Stylesheet",
    },
  ],
};
export const courseReducer = (state = preLoadData, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return {
        ...state,
        courseData: [...state.courseData, action.payload],
      };
    case "DELETE_COURSE":
      return {
        ...state,
        courseData: [...state.courseData, action.payload],
      };
    default:
      return state;
  }

  return state;
};
