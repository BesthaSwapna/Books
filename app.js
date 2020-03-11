const express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const ejs = require('ejs')



//  DB connection
mongoose.connect("mongodb://localhost:27017/testdb",{ useNewUrlParser :"true"});
mongoose.connection.on("error",(err)=>{
  console.log("err",err);
});

mongoose.connection.on("connected",(err,res) => {
  console.log("mongoose is connected");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ejs layout
app.set('views', path.join(__dirname, '/view'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');

app.get('/', function(req, res) {
  res.render('create_book.ejs');
});
app.use(expressLayouts);
var async = require("async");
var Books=require("./controller/books");
app.use('/books',Books);


app.listen(3000,()=>{
  console.log("server started at port"+3000)

})