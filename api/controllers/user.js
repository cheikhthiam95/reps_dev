const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { NotAuthorizedError } = require("../Errors");
const { controller, ACTION } = require("./utils/controller");
const { roleConverter } = require("../config/roles");
require("dotenv").config();

exports.login = controller(async ({ body: { username, password } }) => {
  const errorMsg = "Creditentials Incorrect 0";
  const errorMsg1 = "Creditentials Incorrect 1";

  const user = await User.findOne(
    { username },
    { password: true, firsName: true, lastName: true, role: true }
  );
  if (!user) throw new NotAuthorizedError(errorMsg);
  const result = await bcrypt.compare(password, user.password);
  if (!result) throw new NotAuthorizedError(errorMsg1);
  console.log('role: ',roleConverter('admin'));
  return {
   
    role: roleConverter[user.role],
    token: jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "24h",
    }), username: user.username,
    lastName: user.lastName,
    firstName: user.firstName,
    userId: user._id
  };
}, ACTION.RESULT);

exports.newUser_old = controller(async ({ user, body }) => {
  const password = body.password;

  // const password = await bcrypt.hash(body.password, 30);
  console.log(User);
  const newUser = new User({ ...body, password, createdBy: body._id });
  await newUser.save();

  return newUser;
}, ACTION.CREATE);

exports.newUser = controller(async ({ user, body }) => {
  const hashedPass = await bcrypt.hash(body.password, 10);
  const newUser = new User({
    ...body,
    password: hashedPass,
    createdBy: body._id,
  });
  if (body.file) {
    newUser.avatar = body.file.path;
  }

  await newUser.save();
  return newUser;
}, ACTION.CREATE);
