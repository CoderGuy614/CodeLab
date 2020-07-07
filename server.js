const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const config = require("config");

//Import Routes
const authRoutes = require("./routes/auth");

//Connect to DB
connectDB();

// Instantiate Express App
const app = express();

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = config.get("PORT") || 5000;

app.listen(PORT, () => console.log(`The server is running on ${PORT}`));
