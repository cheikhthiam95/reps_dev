const express = require('express');
const reservationController  = require('../controllers/reservations')

// Initialisation des routes

const router = express.Router();

/// CRUD 
// Create (reservation) POST
router.post('/createReservation',reservationController.createReservation); 


// Read (reservation) GET

router.get('/getReservation/:id',reservationController.getReservation);

// Read (All reservation) GET

router.get('/getAllReservation/',reservationController.getAllReservation);

// UPDATE (reservation) PATCH
router.patch('/updateReservation/:id',reservationController.updateReservation);

// Delete (reservation) DELETE
 router.delete('/deleteReservation/:id',reservationController.deleteReservation);



module.exports = router;