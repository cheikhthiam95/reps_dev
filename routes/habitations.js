const express = require('express');
const habitationControllers  = require('../controllers/habitations')
const authenticate = require('../middleware/authorize') 
//const authorize = require('../middleware/authorize') 
const accessAdmin = require("../middleware/roles") 
const upload = require('../middleware/upload') 

const {body} = require('express-validator');
const role = require('../middleware/roles');
const router = express.Router();

router.post('/createHabitation',authenticate,habitationControllers.createHabitation); 

module.exports = router;