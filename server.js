var express    = require('express');
var sass       = require('node-sass');
var logger     = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views/');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser());
app.use(sass.middleware({
  src: __dirname + '/public',
  dest: __dirname + '/public'
}));
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/multivision');
var db = mongoose.connection;
db.on('error', console.log.bind(console, 'Connection error...'));
db.once('open', function callback() {
  console.log('multivision db opened');
});
var messageSchema = mongoose.Schema({ message: String });
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function (err, messageDoc) {
  mongoMessage = messageDoc.message;
})

app.get('/partials/:partialPath', function (req, res) {
  res.render('partials/' + req.params.partialPath);
});
app.get('*', function (req, res) {
  res.render('index', {
    mongoMessage: mongoMessage
  });
});

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');
