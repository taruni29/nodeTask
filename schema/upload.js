var mongoose = require("mongoose");

var uploadschema = mongoose.Schema({
  image: String
});

exports.photo = mongoose.model("photo", uploadschema, "photoupload");
