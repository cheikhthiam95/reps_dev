const { Schema, model } = require("mongoose");
const { requiredString, requiredObject } = require("./utils/customSchemaType");  

const habitatSchemas = Schema({
  hoteId: { ...requiredString },
  categorieId:{ ...requiredString },
  name: { ...requiredString },
  description: { ...requiredString },
  superficie: { ...requiredString, select: false },
  nombrePiece: { ...requiredString, select: false }, 
  addresse: {...requiredObject},
  status: {
    require:false,
    type:Boolean
  },
  createdBy: {
    required: false,
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});
habitatSchemas.plugin(require("mongoose-autopopulate"));
module.exports = model("Habitat", habitatSchemas);
