const { Schema, model } = require("mongoose");
const { requiredString } = require("./utils/customSchemaType");  

const habitatSchemas = Schema({
  id_hote: { ...requiredString },
  superficie: { ...requiredString, select: false },
  nombrePiece: { ...requiredString, select: false },
  pays: {...requiredString},
  city: {...requiredString},
  address: {...requiredString},
  createdBy: {
    required: false,
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});
habitatSchemas.plugin(require("mongoose-autopopulate"));
module.exports = model("Habitat", habitatSchemas);
