var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var userController = require('./controllers/user');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/newuser');

var app = express();

var router = express.Router();
router.route('/users')
    .get(userController.getAllUsers)
    .post(userController.postUsers);

router.route('/users/:user_id')
    .get(userController.getUsers)
    .delete(userController.deleteUser);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', router);

module.exports = app;
