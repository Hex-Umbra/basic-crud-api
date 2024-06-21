require("dotenv").config({ path: "config.env" });
const PORT = process.env.PORT;

const express = require("express");
const routes = require("./routes.js");
const connectDB = require("./connect.js");

const app = express();

app.use(express.json());
app.use(routes);

// DB CONNECTION //
connectDB();

// PORT OPENED //

app.listen(PORT, () => {
  console.log(`Listening here: http://localhost:${PORT}`);
});
