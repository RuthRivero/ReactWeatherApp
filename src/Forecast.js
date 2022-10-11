import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Forecast() {
  return (
    <Container>
      <Row>
        <Col>
          <div class="col-sm-2">
            <div class="day">Sun</div>
            <div class="day-icon">☀️</div>
            <div class="temp">12</div>
          </div>
        </Col>
        <Col>
          <div class="col-sm-2">
            <div class="day">Mon</div>
            <div class="day-icon">☀️</div>
            <div class="temp">12</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
