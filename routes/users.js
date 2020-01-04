var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const message = 'Hello World!';
    res.render('index', { message });
});

module.exports = router;