require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./src/models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const PORT = process.env.PORT || 5000;
const router = require("./src/routes/index");
const errorHandler = require("./src/middleware/ErrorHandlingMiddleware");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

// ErrorHandling повинен писатись останнім так як next ми явно не вказали і на цьому припиняється робота серверної частини
app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).json({ message: "WORKING!!!" });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
