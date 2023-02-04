let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our booksModel
let Book = require('../models/books');
// Get route for the book list page - read operation
router.get('/', (req, res, next)=> {
    Book.find((err, BookList)=> {
        if (err) 
        {
            return console.error(err);
        } 
        else 
        {
            // console.log(BookList);
            res.render('books', {title: "Book List", BookList: BookList});
            // return res;
        }
    });
});

module.exports = router;