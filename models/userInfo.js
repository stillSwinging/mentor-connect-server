'use strict';
const mongoose = require('mongoose');  // calling our Mongoose to action

const userInfoSchema = new mongoose.Schema(   // this tells our Mongoose what they are looking for and taking to the MongoDB
  {
    email: {
      type: { type: String, required: true },
      isStudent: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      YOB: { type: String, required: false },
      avatar: { type: String, required: true },
      bio: { type: String, required: true },
      note: { type: String, required: false }
    }
  });

// using the schema above we can now create a user model

const userInfoModel = mongoose.model('user', userInfoSchema);
module.exports = userInfoModel;  // exporting instructions that Mongoose will follow when server.js sends them to MongoDB