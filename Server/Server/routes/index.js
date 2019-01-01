﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.json({
        "message": "Hello World"
    });
});

router.post('/testRoute', function (req, res) {
    res.json(req.body);
});

module.exports = router;
