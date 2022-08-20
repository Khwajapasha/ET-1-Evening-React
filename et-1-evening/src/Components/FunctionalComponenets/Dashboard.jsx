import React from "react";
import { useState } from "react";
import { navigationAction } from "../State/Actions/navigationAction";
import { carouselAction } from "../State/Actions/carouselAction";
import { CoursesAction } from "../State/Actions/CoursesAction";
import { useDispatch } from "react-redux";
const Dashboard = () => {
  const [navLinkName, setNavLinkName] = useState("");
  const [navLinkHref, setNavLinkHref] = useState("");
  const [navLinkId, setNavLinkId] = useState("");
  //   ================== Carousel Data=======================
  const [carouselId, setCarouselId] = useState("");
  const [carouselImage, setCarouselImage] = useState("");
  const [carouselTitle, setCarouselTitle] = useState("");
  const [carouselDesc, setCarouselDesc] = useState("");
  // ========================Courses===========================
  const [cardId, setCardId] = useState("");
  const [cardImg, setCardImg] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardDesc, setCardDesc] = useState("");

  const NavDispatch = useDispatch();
  const handleNavDispatch = () => {
    NavDispatch(navigationAction(navLinkId, navLinkName, navLinkHref));
  };

  const CarouselDispatch = useDispatch();
  const handleCarouselDispatch = () => {
    CarouselDispatch(
      carouselAction(carouselId, carouselImage, carouselTitle, carouselDesc)
    );
  };

  const cardDispatch = useDispatch();
  const handleCardlDispatch = () => {
    cardDispatch(CoursesAction(cardId, cardImg, cardTitle, cardDesc));
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <hr />
      <h4>Add Navlink</h4>
      <input
        type="text"
        placeholder="id"
        onChange={(e) => setNavLinkId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Link Name"
        onChange={(e) => setNavLinkName(e.target.value)}
      />
      <input
        type="text"
        placeholder="href Link"
        onChange={(e) => setNavLinkHref(e.target.value)}
      />
      <button onClick={handleNavDispatch}>Dispatch</button>
      <hr />
      <hr />
      <h4>Add Carousel</h4>
      <input
        type="text"
        placeholder="id"
        onChange={(e) => setCarouselId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Carousel Image"
        onChange={(e) => setCarouselImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Carousel Title"
        onChange={(e) => setCarouselTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Carousel Description"
        onChange={(e) => setCarouselDesc(e.target.value)}
      />
      <button onClick={handleCarouselDispatch}>Dispatch</button>
      <hr />
      <hr />
      <h4>Add Cards</h4>
      <input
        type="text"
        placeholder="id"
        onChange={(e) => setCardId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Card Image"
        onChange={(e) => setCardImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="Card Title"
        onChange={(e) => setCardTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Card Description"
        onChange={(e) => setCardDesc(e.target.value)}
      />
      <button onClick={handleCardlDispatch}>Dispatch</button>
    </div>
  );
};

export default Dashboard;
