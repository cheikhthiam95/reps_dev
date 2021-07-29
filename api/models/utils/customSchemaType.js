const { nameValidator } = require('./validators');

module.exports = {
    requiredString: { required: true, type: String },
    requiredObject: { required: true, type: Object },
    nameType: {
        type: String,
        validate: nameValidator
    }
}