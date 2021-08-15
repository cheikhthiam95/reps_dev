const { Schema, model } = require("mongoose");
const { requiredString, requiredObject } = require("./utils/customSchemaType");  

const habitatSchemas = Schema({
  hoteId: { ...requiredString },
  categorieId:{ ...requiredString },
  name: { ...requiredString },
  description: { ...requiredString },
  superficie: { ...requiredString },
  price: { ...requiredString },
  priceDiscount: { require:false,
    type:String },
  nombrePiece: { ...requiredString},  
  address: {...requiredObject},
  status: {
    require:false,
    type:Number
  },
  createdBy: {
    required: false,
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});
habitatSchemas.plugin(require("mongoose-autopopulate"));
module.exports = model("Habitat", habitatSchemas);
