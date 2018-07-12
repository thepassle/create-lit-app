const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('express-static-gzip');

const routes = require('./routes/api');

const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

app.use(serveStatic(__dirname + '/dist/'));

app.listen(process.env.PORT || 8000, function () {
    console.log('Node app is running on port 8000');
});