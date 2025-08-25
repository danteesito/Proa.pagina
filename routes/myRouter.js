const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

router.route('/').get(myController.Principal); 
router.route('/proa').get(myController.proa);    
router.route('/contactos').get(myController.contactos);    

module.exports = router;