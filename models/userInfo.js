'use strict';
const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  ID: { type: Number, required: true },
  type: { type: String, required: true },
  userDetails: [
    firstName = { type: String, required: true },
    lastName = { type: String, required: true },
    YOB = { type: Date, required: true },
    email = { type: String, required: true },
    avatar = { type: URL, required: true },
    bio = { type: String, required: true },
    note = { type: String, required: false }
  ]
});

// using the schema above we can now create a user model

const userInfoModel = mongoose.model('user', userInfoSchema);
module.exports = userInfoModel;