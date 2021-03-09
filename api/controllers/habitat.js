const Habitat = require("../models/habitat"); 
const Reservation = require("../models/reservation"); 

const { controller, ACTION } = require("./utils/controller"); 

exports.newHabitat = controller(async ({ user, body }) => {
  console.log('le user',user, 'le bosy',body);
  const newHabitat = new Habitat(body);
  if (body.file) {
    newHabitat.avatar = body.file.path;
  }

  await newHabitat.save();
  return newHabitat;
}, ACTION.CREATE);

exports.newReservation = controller(async ({ body }) => {
  console.log('le user',reservation, 'Le body pour la réservvation',body);
  const newReservation = new Reservation(body); 
  await newReservation.save();
  return newReservation;
}, ACTION.CREATE);
