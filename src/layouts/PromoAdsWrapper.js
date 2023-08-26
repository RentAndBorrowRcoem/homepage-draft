import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/PromoStylesWrapper.css";

function PromoAdsWrapper() {
  return (
    <div>
      <div className="container">
        <button className="button">Promo Ads</button>
        <button className="button">On Sale</button>
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            marginTop: "100px",
            // color: "white",
            // transform: "translate(-50%, -50%)",
            marginLeft: "-8%",
            marginRight: "8%",
            width: "100%",
          }}
        >
          <Row>
            <Col size={12} sm={6} md={4}>
              <div className="proj-imgbx">
                <img
                  src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  style={{ height: 400, width: 275, margin: "40px" }}
                  alt="Image 4"
                />

                {/* <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pZChDEv9TjrqSTqxRg5D42-oVj-pPg9otw&usqp=CAU"
                  style={{ height: 325, width: 175, margin: "10px" }}
                  alt="Image 4"
                /> */}

                {/* <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pZChDEv9TjrqSTqxRg5D42-oVj-pPg9otw&usqp=CAU"
                  style={{ height: 325, width: 175, margin: "10px" }}
                  alt="Image 4"
                /> */}

                <img
                  src="https://media.istockphoto.com/id/654302450/photo/twin-beds-in-contemporary-apartment-room.webp?b=1&s=170667a&w=0&k=20&c=_JMaDJpLtaa1KIhI_XdliqkaHpuD6LMRuzol2XlzLuw="
                  style={{ height: 400, width: 275, margin: "40px" }}
                  alt="Image 1"
                />

                <img
                  src="https://media.istockphoto.com/id/948783532/photo/photographing-a-seascape.webp?b=1&s=170667a&w=0&k=20&c=ggJ2lVdu2HOjNn39TxjJJBvlAlg4H4N1q8ARuMkG0t8="
                  style={{ height: 400, width: 275, margin: "40px" }}
                  alt="Image 4"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default PromoAdsWrapper;
