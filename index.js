var express = require('express');

const bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors');
var path = require('path');
var db = require('./models');
var api = require('./routes/index');
var app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', api);

app.listen(3000, function() {
  db.sequelize.sync();
});

// module.exports = app;