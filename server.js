const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./reportRoutes");

const app = express();

app.use(cors())


// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/vigilanceDB")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

//  routes
app.use("/api/reports", router);



// server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});