require('./models/User');
require('./models/Component');
require('./models/Android');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

const app = express();
app.use(bodyParser());
app.use('/', routes);

const mongoUri = 'mongodb+srv://nik:1111@cluster0-uzqgh.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connect to mongo db success!');
});

mongoose.connection.on('error', () => {
    console.log('Connection to mongo db error!');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
