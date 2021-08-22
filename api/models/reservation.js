const { Schema, model } = require("mongoose");
const { requiredString, requiredNumber } = require("./utils/customSchemaType");  

const reservationSchemas = Schema({
tenantId: { ...requiredString },
habitatId: { ...requiredString },
startDate: { ...requiredString },
endDate:{ ...requiredString},
status:{ ...requiredNumber},

});


reservationSchemas.plugin(require("mongoose-autopopulate"));
module.exports = model("Reservation", reservationSchemas);
