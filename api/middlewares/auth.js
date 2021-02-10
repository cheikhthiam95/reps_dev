const jwt = require('jsonwebtoken');
const { ForbiddenError, NotAuthorizedError, ApiError } = require('../Errors')
const { TokenExpiredError } = require('../Errors/consts');
const User = require('../models/user');
const {ROLES} = require('../config/roles');

const setUser = async userId => {
  try {
    if (!userId) throw false;
    const user = await User.findById(userId, {_id: 1,email: 1, nom: 1, prenom: 1, role: 1});
    if (!user) throw false;
    return user;
  } catch (e) {
    throw new NotAuthorizedError();
  }
};
// 498 HTTP CODE means that the token is expired. Generally, the front disconnect the user in this case.
exports.authUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    const { userId } = jwt.verify(token, process.env.SECRET_AUTH_TOKEN);
    if (!userId || (req.headers.uuid && req.headers.uuid !== userId)) return next(new NotAuthorizedError());
    const user = await setUser(req.headers.uuid);
    req.user = user;
    next();
  } catch (e) {
    if (e.name === TokenExpiredError) {
      return next(new ApiError("User token has expired. You'll be disconnected.", 498));
    }
    next(new NotAuthorizedError());
  }
};

exports.authRole = (role) => (req, res, next) => {
  const userRole = Object.values(ROLES).find(({name}) => name === req.user.role)
  try {
    if (userRole && role && role.value && userRole.value >= role.value) return next();
    next(new ForbiddenError());
  } catch (e) {
    next(new ForbiddenError());
  }
}