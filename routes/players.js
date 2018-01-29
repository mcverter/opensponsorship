var express = require('express');
var router = express.Router();
var Player = require('../models/player');

router.get('/', function(req, res, next) {
    Player.find(function (err, Players) {
        if (err) return next(err);
        res.json(Players);
    });
});

router.get('/:id', function(req, res, next) {
    Player.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/', function(req, res, next) {
    const body = req.body;
    let postData = Object.assign({}, body.sports, body.demographic, body.social);
    Player.create(postData, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function(req, res, next) {
    Player.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
    Player.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;