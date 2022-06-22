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
        interest: 'I really like wearing my red shirt on away missions.',
        timeZone: 'Eastern'
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
        interest: 'We are Starfleet, we do not lie!',
        timeZone: 'Central'
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
        interest: 'The old man sometimes wants to kill.',
        timeZone: 'Pacific'
      }
    ]
  });

  await userModel.create({
    type: "student",
    userDetails: [
      {
        firstName: 'Samantha',
        lastName: 'Wildman',
        YOB: '2248',
        email: 'samantha.wildman@clubktarian.com',
        avatar: 'http://hello.com/imadorbz.jpg',
        interest: 'I want to learn how to create presents for my virtual forest friends!',
        timeZone: 'Mountain'
      }
    ]
  });

  mongoose.disconnect();
  console.log('Mischief managed!');
}

seedUsers();