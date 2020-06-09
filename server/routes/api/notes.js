require('dotenv').config();

const express = require("express");
const router = express.Router();
const Note = require("../../models/Note");

router.post('/new', (req, res, next) => {
    const body = req.body;
    body.title ?
        (
            Note.create(req.body)
            .then(createdNote => res.json(201, createdNote))
        ) :
        then(err => res.json(500, err))
});

router.get('/favorites', (req, res, next) => {
    Note.find({
            fav: true
        })
        .sort({
            createdAt: 1
        })
        .then(favoriteNotes => res.json(200, favoriteNotes))
        .catch(err => res.json(404, err))
})

router.get('/', (req, res, next) => {
    Note.find()
        .sort({
            createdAt: 1
        })
        .then(allNotes => res.json(200, allNotes))
        .catch(err => res.json(404, err));
});

router.get('/:id', (req, res, next) => {
    Note.findById(req.params.id)
        .then(note => res.json(200, note))
        .catch(err => res.json(404, err));
});

router.put('/:id', (req, res, next) => {
    Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).then(updatedNote => res.json(201, updatedNote))
});

module.exports = router;