const { Schema, model } = require("mongoose");
const { requiredString } = require("./utils/customSchemaType");
const { emailValidator } = require('./utils/validators');
const { ROLES } = require('../config/roles');

const userSchemas = Schema({
  username: { ...requiredString, unique: true },
  email: {
    ...requiredString,
    validate: emailValidator,unique: true
    },
  password: { ...requiredString, select: false },
  lastName: {...requiredString, required: true},
  firstName: {...requiredString, required: true},
  address: {...requiredString, required: true},
  city: {...requiredString, required: true},
  telephone: {...requiredString, required: true},
  pays: {...requiredString, required: true},

  role: {
    type: String,
    required: true,
    enum: Object.values(ROLES).map(({name}) => name)
  },
  createdBy: {
    required: false,
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});
userSchemas.plugin(require("mongoose-autopopulate"));
module.exports = model("User", userSchemas);
