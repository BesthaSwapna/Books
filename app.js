const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const Books = require('./controller/books');

//  DB connection
mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: 'true' });
mongoose.connection.on('error', err => {
  console.log('err', err);
});

mongoose.connection.on('connected', (err, res) => {
  console.log('mongoose is connected');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ejs layout
app.use(express.static('views'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/', Books);

app.listen(3000, () => {
  console.log(`server started at port${3000}`);
});
