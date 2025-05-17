const mongoose = require('mongoose');
const config = require('../config.json'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
{
    cnic :{
        type: String,
        required : true,
        unique: true
    },
    password : {
        type: String,
        required: true,
     },
    name :{
        type: String,
        required : true,
    },
    type :{
        type: String,
        required : true,
    },
    status :{
        type: String,
        required : true,
    },
});

// Hash password before saving user
UserSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
    next();
});

// Generate JWT token for user
UserSchema.methods.generateAuthToken = function () {
    const user = this;
    const token = jwt.sign({ cnic: user.cnic }, config.secretKey);
    return token;
};

const User  = mongoose.model("User", UserSchema)
module.exports = User
