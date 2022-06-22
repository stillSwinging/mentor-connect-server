'use strict';
const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    userDetails: [
      {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        YOB: { type: String, required: true },
        email: { type: String, required: true },
        avatar: { type: String, required: true },
        interest: { type: String, required: true },
        timeZone: { type: String, required: false }
      }
    ]
  });

// using the schema above we can now create a user model

const userInfoModel = mongoose.model('user', userInfoSchema);
module.exports = userInfoModel;
