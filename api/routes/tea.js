const express = require('express'); //import express
const router  = express.Router(); 
const teaController = require('../controllers/tea'); 

router.get('/showTea', teaController.showTea);
router.post('/tea', teaController.newTea); 
router.delete('/deleteTea', teaController.deleteTea);



router.get('/tea/:name', teaController.getTeaCount);
router.post('/tea/:name', teaController.newComment);
router.delete('/tea/:name', teaController.deleteOneTea);

module.exports = router; // export to use in server.js