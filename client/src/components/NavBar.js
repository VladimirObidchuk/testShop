import React, { useContext } from "react";
import { Context } from "../index";
import { Navbar, Container, Nav, NavLink, Button } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utiles/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              className="m-1"
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Адмін панель
            </Button>
            <Button
              className="m-1"
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Вийти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto m-1" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизація
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
export default NavBar;
