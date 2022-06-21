'use strict';

// VP - this code is based on lecture provided can-of-books source code 

// all this file does is send Mongoose on a special mission to put starter data into the MongoDB (VP)

require('dotenv').config();
const mongoose = require('mongoose');  // calling our mongoose to work
mongoose.connect(process.env.MONGODB_CONNECT);  // instructing them how to get into MongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Your Special Ops Mongeese have infiltrated Atlas!');
});

const userModel = require('./models/userInfo');

async function seedUsers() {
  console.log('Seeding database with user data...');


  // VP - reminder to self: update the data models to reflect this boolean as a key/value pair on userInfoSchema

  await userModel.create(  // tells the Mongoose how the information that they are taking to MongoDB for the special mission will be organized
    {
      email: {
        type: '',
        isStudent: '',
        firstName: '',
        lastName: '',
        YOB: '',
        avatar: '',
        bio: '',
        note: ''
      }
    }
  );

  mongoose.disconnect();
  console.log('Mischief managed!'); // reports onto terminal screen when the seeding has been successfully completed (VP)
};

seedUsers();