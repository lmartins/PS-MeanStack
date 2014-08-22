
var express      = require('express'),
    sass         = require('node-sass'),
    logger       = require('morgan'),
    bodyParser   = require('body-parser'),
    passport     = require('passport'),
    cookieParser = require('cookie-parser'),
    session      = require('express-session');

module.exports = function(app, config){

  app.set('views', config.rootPath + '/server/views/');
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser());
  app.use(session({secret: 'multi vision unicors'}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(sass.middleware({
    src: config.rootPath + '/public',
    dest: config.rootPath + '/public'
  }));
  app.use(express.static(config.rootPath + '/public'));

}
