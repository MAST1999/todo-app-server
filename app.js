const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const database = require("./routes/database");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Add the public folder as static for serving files
app.use(express.static(path.join(__dirname, "public")));
// Add the todo folder as static for serving todo files in the /todo url
app.use("/todo", express.static(path.join(__dirname, "todo")));
// Add the calculator folder as static for serving calculator files in the /calculator url
app.use("/calculator", express.static(path.join(__dirname, "calculator")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/database", database);

module.exports = app;
