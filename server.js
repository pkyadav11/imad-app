var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/firstPage',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'firstPage.html'));
  });

app.get('/ui/secondPage',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'secondPage.html'));
  });
/*app.get('/firstPage',function(req,res){
    res.send('First page requested and will be served');
    }
); */

app.get('/ui/madi.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.jpg'));
});

app.get('/ui/hp.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hp.jpg'));
});
app.get('/ui/perks.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'perks.jpg'));
});

app.get('/ui/circle.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'circle.jpg'));
});
app.get('/ui/em.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'em.jpg'));
});

app.get('/ui/noah.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'noah.jpg'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
