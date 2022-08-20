import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
const Courses = () => {
  const [data, setData] = useState([]);
  const courseSelector = useSelector((state) => state.courseReducer.courseData);
  useEffect(() => {
    setData(courseSelector);
  }, []);
  console.log(courseSelector);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.map((items) => {
        return (
          <Card
            style={{ width: "20rem", margin: "10px", padding: "10px" }}
            key={items.id}
          >
            <Card.Img
              width="80px"
              height="200px"
              variant="top"
              src={items.courseImg}
            />
            <Card.Body>
              <Card.Title>{items.courseTitle}</Card.Title>
              <Card.Text>{items.courseDesc}</Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Courses;
