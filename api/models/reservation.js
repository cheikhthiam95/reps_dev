const { Schema, model } = require("mongoose");
const { requiredString, requiredNumber, notRequireBoolean, requiredObject } = require("./utils/customSchemaType");

const reservationSchemas = Schema({
    tenantId: { ...requiredString },
    habitatId: { ...requiredString },
    hoteId: { ...requiredString },
    startDate: { ...requiredString },
    endDate: { ...requiredString },
    status: { ...notRequireBoolean },
    guests: { ...requiredNumber },

}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

reservationSchemas.virtual('reminning').get(function () {
    return this.endDate - this.startDate > 0 ? this.endDate - this.startDate + 'Jour (s)': 'Terminé';

})


reservationSchemas.plugin(require("mongoose-autopopulate"));
module.exports = model("Reservation", reservationSchemas);
