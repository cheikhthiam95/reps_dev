const express = require('express');
const reservationController  = require('../controllers/reservations')

// Initialisation des routes

const router = express.Router();

/// CRUD 
// Create (reservation) POST
router.post('/createReservation',reservationController.createReservation); 


// Read (reservation) GET

router.get('/getReservation/:id',reservationController.getReservation);

// UPDATE (reservation) PATCH
router.patch('/updateReservation:id',reservationController.updateReservation);

// // Delete (locataire) DELETE
// router.delete('/deleteReservation:id',reservationController.deleteReservation);



module.exports = router;