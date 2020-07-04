const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//get
//Retrieve data from the server
app.get("/", (req, res) => {
  res.json(req.body.name);
});

//post
//send data from front end to backend
app.post("/", (req, res) => {
  res.json("Hello Amazon");
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listening on port", 3000);
  }
});
