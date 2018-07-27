const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const app = express();

app.use(bodyParser.json());
app.use(express.static('dist'));
app.use('/api', routes);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8000, function () {
    console.log('Express server is running on port 8000');
});
