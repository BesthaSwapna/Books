const express = require('express');
const router = express.Router();
const Books = require("../Model/books_model")

router.get('/', async (req, res) => {
  var books = await BooksModel.find({});
  res.render("create_book")
});

router.post('/create', async (req, res) => {
  const { bookName, cost, auth } = req.body;

  var NewProduct = new Books({ bookName, cost, auth });
  try {
    const book = await Books.create(NewProduct);
    res.json({
      success: true,
      message: 'add sucessfully.',
      book
    });

  } catch (error) {
    res.json({
      success: false,
      message: error
    });
  }
});

router.get('/create_book', (req, res) => {
  res.render("create_book.ejs");


});


router.post('/update', (req, res) => {

});

router.delete("/delete", (req, res) => {

});


module.exports = router;