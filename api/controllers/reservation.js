 
const Reservation = require("../models/reservation"); 

const { controller, ACTION } = require("./utils/controller"); 
 
exports.newReservation = controller(async ({ body }) => {
  console.log('Le body pour la réservvation',body);
  const newReservation = new Reservation(body); 
  await newReservation.save();
  return newReservation;
}, ACTION.CREATE);
