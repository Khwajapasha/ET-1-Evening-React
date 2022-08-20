export const carouselAction = (
  id,
  carsouelImg,
  carouselTitle,
  carouselDesc
) => {
  return {
    type: "ADD_CAROUSEL",
    data: { id, carsouelImg, carouselTitle, carouselDesc },
  };
};
