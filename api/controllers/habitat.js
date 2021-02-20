const Habitat = require("../models/habitat"); 
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
