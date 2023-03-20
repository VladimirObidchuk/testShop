import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import star from "../assets/star.png";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphon 12 pro",
    price: 25000,
    rating: 5,
    img: `https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg`,
  };
  const description = [
    { id: 1, title: "Оперативна пам'ять", description: "5 гб" },
    { id: 2, title: "Камера", description: "12 мп" },
    { id: 3, title: "Процесор", description: "Pentium 3" },
    { id: 4, title: "Кількість ядер", description: "2" },
    { id: 5, title: "Акумулятор", description: "5000" },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) center no-repeat`,
                backgroundSize: "contain",
                height: 240,
                width: 240,
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>Від {device.price} грн.</h3>
            <Button variant={"outline-dark"}>Добавити до корзини</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-colum m-3">
        <h1>Характеристики</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
