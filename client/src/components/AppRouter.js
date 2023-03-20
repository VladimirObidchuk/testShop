import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../utiles/routes"; //, publicRoutesisAuth &&

function AppRouter() {
  const { user } = useContext(Context);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
