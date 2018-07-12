const express = require("express");
const router = express.Router();

const books = [
    {'author':'G.R.R. Martin', 'title':'A Game of Thrones'},
    {'author':'J.K. Rowling', 'title':'Harry Potter'},
    {'author':'Roald Dahl', 'title':'Charlie and the Chocolate Factory'}
]

router.get('/books', function (req, res) {
    return res.send(books);
});

module.exports = router;