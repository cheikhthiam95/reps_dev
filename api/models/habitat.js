const { Schema, model } = require("mongoose");
const { requiredString, requiredObject, requiredNumber, notRequiredString, notRequireBoolean } = require("./utils/customSchemaType");

const habitatSchemas = Schema({
  hoteId: { ...requiredString },
  categorieId: { ...requiredString },
  name: { ...requiredString },
  description: { ...requiredString },
  superficie: { ...requiredString },
  price: { ...requiredString },
  priceDiscount: { ...notRequiredString },
  nombrePiece: { ...requiredString },
  address: { ...requiredObject },
  isBooked: { ...notRequireBoolean },
  inBookingProcess: { ...notRequireBoolean }, 
  published: { ...notRequireBoolean },
  isPublished: { ...notRequireBoolean },  
  createdBy: {
    required: false,
    type: Schema.Types.ObjectId,
    ref: "User",
  }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });


habitatSchemas.virtual('publishedStatus').get(function () {

  if (this.isPublished) {

    if (this.published) {
      return "Visible";
    } else {
      return "En cours de validation"
    }

  } else {
    if (this.published) {
      return "En cours de validation";
    } else {
      return "Invisible"
    }
  }
})

habitatSchemas.virtual('reservationStatus').get(function () {
 if(this.inBookingProcess){
   return "Réservation demandée"
 }else{
   if(this.isBooked){
    return "Réservé"
   }else{
     return "Libre"
   }
 }
})
habitatSchemas.plugin(require("mongoose-autopopulate"));
module.exports = model("Habitat", habitatSchemas);
