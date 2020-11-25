var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var makeIconRouter = require('./routes/makeIcon')

// モデルの読み込み
var User = require('./models/user');
var Room = require('./models/room');
var Emotion = require('./models/emotion');
var Icon = require('./models/icon');
var Parts = require('./models/head-parts');
var Comment = require('./models/comment');
User.sync().then(() => {
  Room.belongsTo(User, {foreignKey: 'createdBy'});
  Room.sync();
  Comment.belongsTo(User, {foreignKey: 'userId'});
  Comment.sync();
  Emotion.belongsTo(User, {foreignKey: 'createdBy'});
  Emotion.sync();
  Icon.belongsTo(Icon);
  Icon.sync().then(() => {
    Parts.belongsTo(Parts, {foreignKey: 'iconId'});
    Parts.sync();
  });
});

var app = express();
app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/makeIcon', makeIconRouter);

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
