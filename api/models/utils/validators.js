
const validator = (regex, message) => ({validator: v => regex.test(v.replace(/\s/g, '')), message })
module.exports = {
    emailValidator: validator(/([a-z0-9_]+|[a-z0-9_]+\.[a-z0-9_]+)@(([a-z0-9]|[a-z0-9]+\.[a-z0-9]+)+\.([a-z]{2,4}))/i, props => `${props.value} is not a valid email`),
    phoneValidator: validator(/^(\+33|0|0033)[0-9]{9}$/, props => `${props.value} is not a valid phone number`),
    nameValidator: validator(/^[a-z]+[\s\-']?[[a-z]+[\s\-']?]*[a-z]+$/gi, props => `${props.value} is not a valid name`)
}
