const express = require('express');
const book = require('../models/book');
const router = express.Router();

router.get('/', async (req, res) => {
  let books;
  try {
    books = await book.find().sort({ createdAt: 'desc' }).limit(10).exec();
  } catch {
    books = [];
  }
  res.render('index', { books: books });
});

module.exports = router;
