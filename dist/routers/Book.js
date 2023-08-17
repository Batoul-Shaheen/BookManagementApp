import express from "express";
import data from '../data/Sample_data.js';
const router = express.Router();
router.get(' / ', (req, res) => {
    res.send(data);
});
router.get('/:id', (req, res) => {
    const id = +req.params.id;
    const book = data.find(it => it.id === id);
    if (book) {
        res.status(200).send(book);
    }
    else {
        res.status(404).send('Book NOT found !');
    }
    res.send('Book by ID');
});
router.post('/', (req, res) => {
    if (!req.body.id || !req.body.title || !req.body.author || !req.body.publicationYear) {
        res.status(400).send('body are required!');
        return;
    }
    const newBook = {
        id: 1,
        title: req.body.title,
        author: req.body.author,
        publicationYear: req.body.publicationYear,
    };
    data.unshift(newBook);
    res.status(201).send('Task Created');
});
router.put('/:id', (req, res) => {
    res.send('Book Updated');
});
router.delete('/:id', (req, res) => {
    res.send('Book Deleted');
});
router.get('/', (req, res) => {
    const bookName = req.query.name;
    const year = req.query.publicationYear;
    if (!bookName && !year) {
        return res.send(data);
    }
    else if (bookName) {
        const result = data.filter(Book => {
            return Book.title.includes(bookName);
        });
        res.status(200).send(result);
    }
    else if (year) {
        const result = data.filter(Year => {
            return Year.publicationYear === Number(year);
        });
        res.status(200).send(result);
    }
});
export default router;
//# sourceMappingURL=Book.js.map