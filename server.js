const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './client/dist/client') ));
app.use(bodyParser.json());
mongoose.Promise = global.Promise;

const routes = require('./routes')
routes(app);

app.listen(8000, function(){
    console.log('Power Overwhelming');
})