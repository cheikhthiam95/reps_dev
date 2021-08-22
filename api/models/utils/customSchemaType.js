const { nameValidator } = require('./validators');

module.exports = {
    requiredString: { required: true, type: String },
    notRequiredString: { required: false, type: String },
    requiredObject: { required: true, type: Object },
    requiredNumber: { required: true, type: Number },
    notRequireBoolean: { required: false, type: Boolean, default:false },
    nameType: {
        type: String,
        validate: nameValidator
    }
}