import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./utiles/App";
import DeviceStore from "./store/DeviceStore";
import UserStore from "./store/userStore";

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        device: new DeviceStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
