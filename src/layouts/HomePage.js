import React from "react";
import image1 from "../assests/hero-bg.jpg";
import "font-awesome/css/font-awesome.min.css";
import "../styles/HomePage.css";
import { Col, Row } from "react-bootstrap";
import image6 from "../assests/icons8-iphone-14-50.png"

function HomePage() {
  return (
    <div>
      <div className="bg-image">
        <img src={image1} alt="Background" className="bg-image" />
        <div className="overlay"></div>
      </div>
      <div className="text-content">
        <div>
          <h2 className="heading-2">More than 63 ads in 6 categories</h2>
          <h1 className="heading-1">List or find anything, literally</h1>
          {/* <div className="wrap"> */}
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="What are you looking for?"
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
          {/* </div> */}
        </div>
        <div className="img-box">
          <Row>
            <Col size={12} sm={4} md={4}>
              <div className="proj-imgbx">
                <a href="">
                  <img
                    src={image6}
                    alt="Image 6"
                  />
                </a>
                <a href="">
                  <img
                    src="https://img.freepik.com/free-vector/printed-circuit-board-concept-illustration_114360-5139.jpg?size=626&ext=jpg&ga=GA1.1.800555879.1692894673&semt=sph"
                    alt="Image 2"
                  />
                </a>
                <a href="">
                  <img
                    src="https://img.freepik.com/free-vector/printed-circuit-board-concept-illustration_114360-5139.jpg?size=626&ext=jpg&ga=GA1.1.800555879.1692894673&semt=sph"
                    alt="Image 3"
                  />
                </a>
                <a href="">
                  <img
                    src="https://img.freepik.com/free-vector/printed-circuit-board-concept-illustration_114360-5139.jpg?size=626&ext=jpg&ga=GA1.1.800555879.1692894673&semt=sph"
                    alt="Image 4"
                  />
                </a>
                <a href="">
                  <img
                    src="https://img.freepik.com/free-vector/printed-circuit-board-concept-illustration_114360-5139.jpg?size=626&ext=jpg&ga=GA1.1.800555879.1692894673&semt=sph"
                    alt="Image 5"
                  />
                </a>
                <a href="">
                  <img
                    src="https://img.freepik.com/free-vector/printed-circuit-board-concept-illustration_114360-5139.jpg?size=626&ext=jpg&ga=GA1.1.800555879.1692894673&semt=sph"
                    alt="Image 6"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
