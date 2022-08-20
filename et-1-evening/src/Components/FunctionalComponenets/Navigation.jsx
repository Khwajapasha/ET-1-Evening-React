import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
export const Navigation = () => {
  const [data, setData] = useState([]);

  const navSelector = useSelector((state) => state.navigationReducer.navData);

  useEffect(() => {
    setData(navSelector);
  }, [navSelector]);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="ExaltechLogoPic.jpg"
              alt="logo"
              width="70px"
              height="70px"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {data.map((items) => {
                return (
                  <Nav.Link href={items.link} key={items.id}>
                    {items.linkName}
                  </Nav.Link>
                );
              })}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
