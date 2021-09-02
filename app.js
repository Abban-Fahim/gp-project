require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const radioData = require("./form");
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
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/file", express.static("static"));

app.get("/", (req, res) => {
  res.render("home");
});

app
  .route("/form")
  .get((req, res) => res.render("form", { controls: radioData }))
  .post((req, res) => {
    const response = new Response({
      response: req.body,
    });
    response.save();
    res.render("success", { email: req.body.name });
  });

// app.route("/video").get((req, res) => res.render("video"));

// app.get("/data", (req, res) => {
//   res.render("auth", { success: true });
// });
// app.post("/auth", (req, res) => {
//   if (
//     req.body.user === process.env.USER &&
//     req.body.password === process.env.PASS
//   ) {
//     Response.find((err, docs) => {
//       res.render("table", { data: docs });
//     });
//   } else {
//     res.render("auth", { success: false });
//   }
// });

app.get("/getFormJson", (req, res) => {
  Response.find((err, docs) => {
    res.json(docs);
  });
});

app.get("/delete/:id", (req, res) => {
  Response.deleteOne({ _id: req.params.id }, {}, (err) => {
    err ? console.error(err) : res.redirect("/data");
  });
});

app.get("/poem", (req, res) => {
  res.render("poem");
});

app.get("/allData", (req, res) => {
  Response.find({}, (err, found) => {
    err ? console.error(err) : res.json(found);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("started!");
});
