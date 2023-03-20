import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star_1.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utiles/consts";

export const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={({ width: 150, cursor: "pointer" }, { border: "light" })}>
        <Image width={150} height={150} src={device.img} />
        <div className="text-black-50 mt-1 mb-1 d-flex justify-content-between align-items-center">
          <div>Samsung ......</div>
          <div className="d-flex justify-content-center align-items-center">
            <div>{device.rating}</div>
            <Image width={15} height={15} src={star} />
          </div>
        </div>
        <div className="mb-1">{device.name}</div>
      </Card>
    </Col>
  );
};
