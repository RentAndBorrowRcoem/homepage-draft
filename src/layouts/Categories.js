import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import "../styles/FirstPage.css";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import "../styles/Categories.css";
function Categories() {
  return (
    <div>
      <div className="full_page">
        <div>
          <h3 className="heading-2" style={{ marginBottom: 0 }}>
            Most popular
          </h3>
          <h1 className="heading-1" style={{ marginTop: 0 }}>
            <b>Categories</b>
          </h1>
        </div>
        <div className="flex_center">
          <a href="Browse Categories" className="link_style">
            <h2 className="heading-2">Browse Categories</h2>
          </a>
          <h3>
            <BsArrowRight className="arrow-icon" />
          </h3>
          {/* <div className="heading-2" style={{ margin: "20px" }}>
            <i className="fa-solid fa-arrow-right" />
          </div> */}
        </div>
      </div>
      <div className="image_style">
        <Row>
          <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  style={{ height: 325, width: 175, margin: "10px" }}
                  alt="Image 4"
                />
                <div className="image-text">Electronics</div>
              </div>
              {/* </div> */}

              <img
                src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                style={{ height: 325, width: 175, margin: "10px" }}
                alt="Image 4"
              />

              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                style={{ height: 325, width: 175, margin: "10px" }}
                alt="Image 4"
              />

              <img
                src="https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                style={{ height: 325, width: 175, margin: "10px" }}
                alt="Image 1"
              />

              <img
                src="https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya2luZyUyMHNwYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                style={{ height: 325, width: 175, margin: "10px" }}
                alt="Image 4"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Categories;
