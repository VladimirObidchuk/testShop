import React, { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utiles/consts";
import { NavLink, useLocation } from "react-router-dom";
import { login, registration } from "../http/userApi";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const click = async () => {
    if (isLogin) {
      const response = await login();
    } else {
      const response = await registration(email, password);
      console.log(response);
    }
  };

  return (
    <Container className="d-flex justify-content-end aligen-item-center mt-3">
      <Card className="p-3" style={{ width: window.innerWidth / 2 }}>
        <h2 className="m-auto p-3">
          {isLogin ? "Авторизація" : "Регістрація"}
        </h2>
        <Form className="d-flex flex-column justify-content-evenly">
          <Form.Control
            className="mt-3"
            placeholder="Введіть email...."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введіть password...."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 w-80">
            {isLogin ? (
              <div className=" d-flex w-50">
                Немаєте аккаунта?
                <NavLink to={REGISTRATION_ROUTE} style={{ paddingLeft: 6 }}>
                  Реєструйтесь!
                </NavLink>
              </div>
            ) : (
              <div className=" d-flex w-50">
                Маєте аккаунта?
                <NavLink to={LOGIN_ROUTE} style={{ paddingLeft: 6 }}>
                  Війдіть!
                </NavLink>
              </div>
            )}
            <Button
              variant={"outline-success"}
              className="w-25"
              onClick={click}
            >
              {isLogin ? "Війти" : "Зареєструватись"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
