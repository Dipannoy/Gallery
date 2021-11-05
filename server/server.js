const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
var image = require("./schema.js");
const config = require("./configExample.js");
mongoose.Promise = require("bluebird");
mongoose
  .connect(
    config.dbUrl,
    { useNewUrlParser: true }
  )
  .then(() => {
    // if all is ok we will be here
    console.log("Db initialized");
  })
  .catch(err => {
    // if error we will be here
    console.error("DB starting error", err);
    //process.exit(1);
  });

var personSchema = mongoose.Schema({
  name: String
  // age: Number,
  // nationality: String
});
var Person = mongoose.model("Person", personSchema);
var newPerson = new Person({
  name: "dip"
});
newPerson.save(function(err, Person) {
  if (err) console.log("error");
  //    res.render('show_message', {message: "Database error", type: "error"});
  //    res.render('show_message', {
  else console.log("okkkkkk");
  //       message: "New person added", type: "success", person: personInfo});
});

Person.find(function(err, response) {
  console.log(response);
});

// var url = "mongodb://localhost:27017/test";
// mongoose.connect(url);
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "Connection error"));
// db.open("open", function() {
//   console.log("connected");
// });
// var newImage = new image({
//   url: "dxfhbf",
//   tag: "Mug"
// });

// newImage.save(function(err, imagclt) {
//   if (err) console.log("save no");
//   //    res.render('show_message', {message: "Database error", type: "error"});
//   else console.log("save");

//   //    res.render('show_message', {
//   //       message: "New person added", type: "success", person: personInfo});
// });

// newImage.save(function(err) {
//   if (err) throw err;
//   images.find({}, function(err, data) {
//     if (err) throw (err, console.log(data));
//   });
// });
const port = 5000;
const app = express();
app.use(cors());
app.get("/app", (req, res) => {
  console.log();
  res.send("hlllo");
});

app.listen(port);
console.log(`Bigprint listening on ${port}`);
