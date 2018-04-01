var express = require('express');
var path = require('path');
var bodyParser= require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/argon');
var db = mongoose.connection;
var app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.listen(3000, function() {
  console.log('listening on 3000')
})

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.render('index');
})

app.get('/users/register', function(req, res) {
  var respo = "sds";
  console.log(respo);
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})