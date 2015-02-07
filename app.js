var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');

var port = process.env.port || 8080;
var app  = express();

require('node-jsx').install();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./app/routes/index')(app);

app.get('*', function(req, res) {
  res.json({
    "route": "It's a trap!  This page doesn't exist..."
  });
});

app.listen(port);
console.log('Server is currently running on port: ' + port + ', CTRL+C to kill server');

