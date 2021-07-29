const { Schema, model } = require("mongoose");
const { requiredString } = require("./utils/customSchemaType");  

const categorieSchemas = Schema({

  name: { ...requiredString },
  description: { ...requiredString }
});
categorieSchemas.plugin(require("mongoose-autopopulate"));
module.exports = model("Categorie", categorieSchemas);
