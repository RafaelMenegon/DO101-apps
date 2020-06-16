var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('KEREN ELISA EU TE AMO!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello mars test!\n');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

