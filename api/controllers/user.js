const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { NotAuthorizedError } = require("../Errors");
const {controller, ACTION} = require('./utils/controller')
const { roleConverter } = require('../config/roles');
require('dotenv').config();


exports.login = controller(async ({body: {username, password}}) => {
    const errorMsg = "Creditentials Incorrect";
    
    const user = await User.findOne({username}, {password: true, username: true, nom: true, prenom: true, role: true});
    if(!user) throw new NotAuthorizedError(errorMsg);
    
    const result = await bcrypt.compare(password, user.password);
    if(!result) throw new NotAuthorizedError(errorMsg);
    return {
            username: user.username,
            nom: user.nom,
            prenom: user.prenom,
            userId: user._id,
            role: roleConverter(user.role),
            token: jwt.sign({userId: user._id}, process.env.SECRET_AUTH_TOKEN, {expiresIn: "24h"})
        };
}, ACTION.RESULT);

exports.newUser = controller(async ({user, body}) => {
    const password = await bcrypt.hash(body.password, 30);
    const newUser = new User({...body, password, createdBy: user._id});
    await newUser.save();
    return newUser
}, ACTION.CREATE);
