const express = require('express');
const hoteController  = require('../controllers/hotes')
const authenticate = require('../middleware/authenticate') 
const upload = require('../middleware/upload') 

const {body} = require('express-validator')
// Initialisation des routes

const router = express.Router();

/// CRUD 
// Create (locataire) POST
router.post('/register',upload.single('avatar'),hoteController.register);
router.post('/createHote', hoteController.createHote);
// password: qFz3TdHmTGWC2V3u user:cheikh
//mongodb+srv://cheikh:<password>@cluster0.gucf5.mongodb.net/atipik_house?retryWrites=true&w=majority

// Read (locataire) GET

router.get('/getHote/:id',hoteController.getHote);

router.post('/login',body('username').isEmail(),
// password must be at least 5 chars long
body('password').isLength({ min: 5 }),hoteController.login);
// Read (locataire) GET all

router.get('/getAllHote/',authenticate,hoteController.getAllHote);
// UPDATE (locataire) PATCH
router.patch('/updateHote/:id',hoteController.updateHote);

// Delete (locataire) DELETE
router.delete('/deleteHote/:id',hoteController.deleteHote);



module.exports = router;