const express = require("express");
const router = require("./routes/routes");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");

try {
  dotenv.config({ path: __dirname + "/config/config.env" });
} catch (error) {
  console.log(error);
}

connectDB();
const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(cors());

app.use("/api/transactions", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../build/index.html"))
  );
}

var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log(process.env.NODE_ENV + " mode running at port: " + port);
});

module.exports = app;
