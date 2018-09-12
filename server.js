var express    = require("express");
var db = require('./db');
var bodyParser = require('body-parser');
var app = express();    
var path = require('path')
var port = process.env.PORT || 3002;
var routes = require("./routes/index")
var userController = require('./controllers/userController');
var router=express.Router();
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var fileUpload = require('express-fileupload');
var cors = require('cors');
// app.use(logger('dev'));
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit:"1024mb" }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/users', routes.user);


//photo upload master
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.post('/upload', (req, res, next) => {
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({file: `public/${req.body.filename}.jpg`});
  });
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// app.listen(8000, () => {
//     console.log('UPLOAD STARTED 8000');
// });
app.listen(port,()=>{
    console.log("POSTMAN Server started on port " + port);
});

module.exports = app;

//const express = require('express');
