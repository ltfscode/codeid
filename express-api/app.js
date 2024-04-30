const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs')

const app = express();

// Посмотреть настройку двигателя

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'jade');

// Раздавать статические файлы из папки 'upLoads'

app.use('/uploads', express.static('uploads'))

app.use('/api', require('./routes'))

if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads')
}

// Поймать 404 и перейти к обработчику ошибок
app.use(function(req, res, next) {
  next(createError(404));
});

// Сделки с ошибками
app.use(function(err, req, res, next) {
  // Установить местных жителей, предоставляя только ошибку в разработке
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // рендеринг страницы ошибки
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
