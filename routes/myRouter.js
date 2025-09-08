const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

router.route('/').get(myController.Principal); 
router.route('/proa').get(myController.proa);    
router.route('/contactos').get(myController.contactos);    
router.route('/nosotros').get(myController.nosotros);    
router.route('/estudios').get(myController.estudios);    

module.exports = router;