import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
const MyCarousel = () => {
  const [data, setData] = useState([]);
  const carouselSelector = useSelector(
    (state) => state.carouselReducer.carouselData
  );

  useEffect(() => {
    setData(carouselSelector);
  }, [carouselSelector]);
  return (
    <div>
      <Carousel fade>
        {data.map((items) => {
          return (
            <Carousel.Item key={items.id}>
              <img
                className="d-block w-100"
                src={items.carsouelImg}
                alt="First slide"
                height="500px"
              />
              <Carousel.Caption>
                <h3>{items.carouselTitle}</h3>
                <p>{items.carouselDesc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
