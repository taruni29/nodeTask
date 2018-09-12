var mongoose = require('mongoose');  
 
require("dotenv").load()
mongoose.connect("mongodb://vamsi:vamsi@ds123770.mlab.com:23770/vamsi")
exports.mongoose=mongoose;

var db = mongoose.connect('mongodb://vamsi:vamsi@ds123770.mlab.com:23770/vamsi', function(error){
    if(error) console.log(error);

        console.log("connection successful");
});
