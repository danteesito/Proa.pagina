const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

router.route('/').get(myController.Principal); 


module.exports = router;