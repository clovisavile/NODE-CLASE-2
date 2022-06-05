var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var biografiaRouter = require('./routes/biografia'); //routes/biografia.js
var contactoRouter = require('./routes/contacto'); //routes/contacto.js
var escuchanosRouter = require('./routes/escuchanos'); //routes/escuchanos.js
var fechasRouter = require('./routes/fechas'); //routes/fechas.js
var galeriaRouter = require('./routes/galeria'); //routes/galeria.js
var videosRouter = require('./routes/videos'); //routes/videos.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/biografia', biografiaRouter);
app.use('/contacto', contactoRouter);
app.use('/escuchanos', escuchanosRouter);
app.use('/fechas', fechasRouter);
app.use('/galeria', galeriaRouter);
app.use('/videos', videosRouter);

app.get('/prueba', function(req,res) {
  res.send('ClovisAv')
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
