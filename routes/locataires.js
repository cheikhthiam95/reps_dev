const express = require('express');
const locataireController  = require('../controllers/locataires')

// Initialisation des routes

const router = express.Router();

/// CRUD 
// Create (locataire) POST
router.post('/createLocataire',locataireController.createLocataire);

// password: qFz3TdHmTGWC2V3u user:cheikh
//mongodb+srv://cheikh:<password>@cluster0.gucf5.mongodb.net/atipik_house?retryWrites=true&w=majority

// Read (locataire) GET

router.get('/getLocataire/:id',locataireController.getLocataire);


// Read (locataire) GET all

router.get('/getAllLocataire/',locataireController.getAllLocataire);
// UPDATE (locataire) PATCH
router.patch('/updateLocataire/:id',locataireController.updateLocataire);

// Delete (locataire) DELETE
router.delete('/deleteLocataire/:id',locataireController.deleteLocataire);



module.exports = router;