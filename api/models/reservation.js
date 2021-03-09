const { Schema, model } = require("mongoose");
const { requiredString } = require("./utils/customSchemaType");  

const reservationSchemas = Schema({
  id_locataire: { ...requiredString },
  id_habitat: { ...requiredString },
  periode: { ...requiredString }
});
reservationSchemas.plugin(require("mongoose-autopopulate"));
module.exports = model("Reservation", reservationSchemas);
