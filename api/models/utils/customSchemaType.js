const { nameValidator } = require('./validators');

module.exports = {
    requiredString: { required: true, type: String },
    nameType: {
        type: String,
        validate: nameValidator
    }
}