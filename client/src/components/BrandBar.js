import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Card, Row } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex flex-row mt-2">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          style={{ cursor: "pointer" }}
          className="m-2 p-3 w-25 align-items-center"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
