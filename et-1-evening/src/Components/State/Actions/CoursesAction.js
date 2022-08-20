export const CoursesAction = (id, courseImg, courseTitle, courseDesc) => {
  return {
    type: "ADD_COURSE",
    // payload: {
    //   id: myId,
    //   courseImg: myImage,
    //   courseTitle: myTitle,
    //   courseDesc: myDesc,
    // },
    payload: {
      id,
      courseImg,
      courseTitle,
      courseDesc,
    },
  };
};
