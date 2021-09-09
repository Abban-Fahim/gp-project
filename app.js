require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formSchema = mongoose.Schema({
  response: Object,
});
const Response = mongoose.model("Response", formSchema);

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.route("/form").post((req, res) => {
  const response = new Response({
    response: req.body,
  });
  response.save();
  res.redirect("https://abban-fahim.github.io/gp-project/success.html");
});

app.get("/getFormJson", (req, res) => {
  Response.find((err, docs) => {
    res.json(docs);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("started!");
});
