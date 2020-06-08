require('dotenv').config();

const express = require("express");
const router = express.Router();
const Note = require("../../models/Note");

router.post('/new', (req, res, next) => {
    Note.create(req.body).then(createdNote => res.json(createdNote));
});

router.get('/favorites', (req, res, next) => {
    Note.find( { fav: true } )
        .sort({
            createdAt: 1
        })
        .then(favoriteNotes => res.json(favoriteNotes))
})

router.get('/', (req, res, next) => {
    Note.find()
        .sort({
            createdAt: 1
        })
        .then(allNotes => res.json(allNotes));
});

router.get('/:id', (req, res, next) => {
    Note.findById(req.params.id)
        .then(note => res.json(note));
});

router.put('/:id', (req, res, next) => {
    Note.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }).then(updatedNote => res.json(updatedNote));
});

module.exports = router;