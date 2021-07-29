 
const Categorie = require("../models/categorie"); 

const { controller, ACTION } = require("./utils/controller"); 
 
exports.newCategorie = controller(async ({ body }) => {
  console.log('Le body pour la réservvation',body);
  const newCategorie = new Categorie(body); 
  await newCategorie.save();
  return newCategorie;
}, ACTION.CREATE);
