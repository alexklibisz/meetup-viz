var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = (process.env.PORT || 5000);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '100mb' }))

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-reqed-With,content-type');
    next();
});

app.post('/perf', function(req, res) {
  var fn = 'debug-' + req.body.sessionId + '.log';
  fs.appendFile(fn, JSON.stringify(req.body) + '\n', 'utf8', () => console.log(fn));
  res.send('OK');
});

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port);
});
