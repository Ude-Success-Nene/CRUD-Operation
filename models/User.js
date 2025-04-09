const mongoose = require("mongoose");

const UserObject = {
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        rquired: true
    },
    age: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
} // object

const UserSchema = new mongoose.Schema(UserObject) // structure

const User = mongoose.model('user', UserSchema) // data