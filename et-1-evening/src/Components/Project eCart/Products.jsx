import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ProductsAction } from "../State/Actions/ProductsAction";
const Products = () => {
  const [storeDatafetched, setStoreDatafetched] = useState([]);
  const productsSelector = useSelector((state) => state.ProductsReducer.state);
  const dispatchProducs = useDispatch();
  const getApiData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatchProducs(ProductsAction(response.data));
  };
  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    setStoreDatafetched(productsSelector);
  }, [productsSelector]);

  return (
    <div>
      <h1>Online Shoping</h1>
      {storeDatafetched &&
        storeDatafetched.map((currentItem) => {
          return (
            <Card
              style={{
                width: "18rem",
                display: "inline-block",
                margin: "10px",
              }}
              key={currentItem.id}
            >
              <Card.Header>{currentItem.title.slice(0, 25)}...</Card.Header>
              <Card.Body>
                <Card.Img
                  src={currentItem.image}
                  width="15rem"
                  height="300px"
                />
                <Card.Text>{currentItem.description.slice(0, 50)}...</Card.Text>
                <i>Price: {currentItem.price}$</i>
              </Card.Body>
              <Card.Footer>
                <Card.Text>Ratings</Card.Text>
              </Card.Footer>
            </Card>
          );
        })}
    </div>
  );
};

export default Products;
