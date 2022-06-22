'use strict';

// VP - this code is based on lecture provided can-of-books source code
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECT);  // don't forget to hook this up!
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Your Special Ops Mongeese have infiltrated Atlas!');
});

const userModel = require('./models/userInfo');

async function seedUsers() {
  console.log('Seeding database with student data...');

  await userModel.create({
    type: "mentor",
    userDetails: [
      {
        firstName: 'John',
        lastName: 'Crusher',
        YOB: '2200',
        email: 'john.crusher@email.com',
        avatar: 'http://hello.com/immacutie.jpg',
        bio: 'I really like wearing my red shirt on away missions.',
        note: 'Jean-Luc has my back!',
        // VP - reminder to self: update the data models to reflect this boolean as a key/value pair on both mentorInfoSchema and studentInfoSchema
      }
    ]
  });

  await userModel.create({
    type: "student",
    userDetails: [
      {
        firstName: 'Wesley',
        lastName: 'Crusher',
        YOB: '2225',
        email: 'wesley.crusher@email.com',
        avatar: 'http://hello.com/imshort.jpg',
        bio: 'We are Starfleet, we do not lie!',
        note: 'Life is going to be so bitter after this.',
        // VP - reminder to self: update the data models to reflect this boolean as a key/value pair on both mentorInfoSchema and studentInfoSchema
      }
    ]
  });

  await userModel.create({
    type: "mentor",
    userDetails: [
      {
        firstName: 'Jadzia',
        lastName: 'Dax',
        YOB: '2052',
        email: 'Joran.Curzon.Jadzia.Dax@email.com',
        avatar: 'http://hello.com/iamsomany.jpg',
        bio: 'the old man sometimes wants to kill',
        note: 'let us play tonga',
        // VP - reminder to self: update the data models to reflect this boolean as a key/value pair on both mentorInfoSchema and studentInfoSchema
      }
    ]
  });

  mongoose.disconnect();
  console.log('Mischief managed!');
}

seedUsers();