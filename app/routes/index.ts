import express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.send('Hello world 2'));

module.exports = router;
