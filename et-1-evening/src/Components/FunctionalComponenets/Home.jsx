import React, { useState } from "react";
import Courses from "./Courses";
import MyCarousel from "./MyCarousel";
import { Navigation } from "./Navigation";
import { navData } from "../Reducer/Reducer";
import { carouselData } from "../Reducer/Reducer";
import { coursesData } from "../Reducer/Reducer";
import Dashboard from "./Dashboard";
import Products from "../Project eCart/Products";
export const Home = () => {
  return (
    <div>
      {/* <Navigation navData={navData} /> */}
      {/* <hr /> */}
      {/* <MyCarousel carouselData={carouselData} /> */}
      {/* <hr /> */}
      {/* <Courses coursesData={coursesData} /> */}
      {/* <hr /> */}
      {/* <TodoList /> */}
      {/* <Dashboard /> */}
      <Products />
    </div>
  );
};
