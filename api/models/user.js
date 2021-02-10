const { Schema, model } = require("mongoose");
const { requiredString } = require("./utils/customSchemaType");
const { emailValidator } = require('./utils/validators');
const { ROLES } = require('../config/roles');

const userSchemas = Schema({
  username: { ...requiredString, unique: true },
  email: {
    ...requiredString,
    validate: emailValidator,
    },
  password: { ...requiredString, select: false },
  nom: {...requiredString, required: true},
  prenom: {...requiredString, required: true},
  role: {
    type: String,
    required: true,
    enum: Object.values(ROLES).map(({name}) => name)
  },
  createdBy: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});
userSchemas.plugin(require("mongoose-autopopulate"));
module.exports = model("User", userSchemas);
