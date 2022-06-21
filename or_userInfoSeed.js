// 'use strict';

// // VP - this code is based on lecture provided can-of-books source code
// require('dotenv').config();
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_CONNECT);  // don't forget to hook this up!
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('Your Special Ops Mongeese have infiltrated Atlas!');
// });

// const userModel = require('./models/or_userInfo');

// async function seedUsers() {
//   console.log('Seeding database with user data...');

//   await userModel.create({
//     type: '',
//     userDetails: [
//       ID='',
//       firstName = '',
//       lastName = '',
//       YOB = Date(),
//       email = '',
//       avatar = string.link('url'),
//       bio = '',
//       note = ''
//     ]
//     // VP - reminder to self: update the data models to reflect this boolean as a key/value pair on both mentorInfoSchema and userInfoSchema
//   });

//   mongoose.disconnect();
//   console.log('Mischief managed!');
// }

// seedUsers();