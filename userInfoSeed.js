'use strict';

// VP - this code is based on lecture provided can-of-books source code
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECT);

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
    firstName: 'John',
    lastName: 'Crusher',
    YOB: '2200',
    email: 'john.crusher@email.com',
    avatar: 'http://hello.com/immacutie.jpg',
    interest: 'I really like wearing my red shirt on away missions.',
    timeZone: 'Eastern'
  });

  await userModel.create({
    type: "student",
    firstName: 'Wesley',
    lastName: 'Crusher',
    YOB: '2225',
    email: 'wesley.crusher@email.com',
    avatar: 'http://hello.com/imshort.jpg',
    interest: 'We are Starfleet, we do not lie!',
    timeZone: 'Central'
  });

  await userModel.create({
    type: "mentor",
    firstName: 'Jadzia',
    lastName: 'Dax',
    YOB: '2052',
    email: 'Joran.Curzon.Jadzia.Dax@email.com',
    avatar: 'http://hello.com/iamsomany.jpg',
    interest: 'The old man sometimes wants to kill.',
    timeZone: 'Pacific'
  });

  await userModel.create({
    type: "student",
    firstName: 'Samantha',
    lastName: 'Wildman',
    YOB: '2248',
    email: 'samantha.wildman@clubktarian.com',
    avatar: 'http://hello.com/imadorbz.jpg',
    interest: 'I want to learn how to create presents for my virtual forest friends!',
    timeZone: 'Mountain'
  });

  await userModel.create({
    type: "mentor",
    firstName: "Benjamin",
    lastName: "Sisko",
    YOB: 1963,
    email: "blsisko.starfleet.com",
    avatar: "https://www.extremetech.com/wp-content/uploads/2020/10/Sisko-Feature-640x353.jpg",
    interest: "I am currently Commanding Deep Space Nine(formerly Terrok Nor) in the Gamma Quadrant.",
    timeZone: "Pacific"
  });

  await userModel.create({
    type: "mentor",
    firstName: "Kathryn",
    lastName: "Janeway",
    YOB: 1983,
    email: "katejaneway@starfleet.com",
    avatar: "https://cdn.cnn.com/cnnnext/dam/assets/220131174124-bruno-encanto-super-169.jpeg",
    interest: "I made a wrong turn into the Delta Quadrant. Could somone please feed my dog.",
    timeZone: "Eastern"
  });

  await userModel.create({
    type: "student",
    firstName: "Jake",
    lastName: "Sisko",
    YOB: 1993,
    email: "posaga6604@qqhow.com",
    avatar: "https://static.wikia.nocookie.net/memoryalpha/images/6/6d/Jake_Sisko%2C_2369.jpg",
    interest: "Hi! My name is Jake. My dad is was the Commander of a space station until he got yoinked up into the upside down by some aliens. I thought I wanted to be a writer but now I just want to learn all about temporal physics so I can get my dad back. I am hoping to learn what things I should study now to get me into a leading Starfleet temporal dynamics lab.",
    timeZone: "Mountain"
  });

  await userModel.create({
    type: "student",
    firstName: "Bruno",
    lastName: "Guy",
    YOB: 1973,
    email: "bruno@someemail.com",
    avatar: "https://cdn.cnn.com/cnnnext/dam/assets/220131174124-bruno-encanto-super-169.jpeg",
    interest: "Noone ever wants to talk about me. I don't know why, I'm a pretty nice guy and the looks decent wagon didn't pass me by.",
    timeZone: "Central"
  });

  await userModel.create({
    type: "mentor",
    firstName: "Regana",
    lastName: "Tosh",
    YOB: "2312",
    email: "smuggles@markaliaprime.com",
    avatar: "chin ridges are in this year",
    interest: "Covert logistics.",
    timeZone: "Mountain"
  });

  await userModel.create({
    type: "mentor",
    firstName: "Dmar",
    lastName: "Cardassianson",
    YOB: "2302",
    email: "damar.cardassianson",
    avatar: "I don't get paid enough for this.",
    interest: "Upper middle management.",
    timeZone: "Eastern"
  });

  await userModel.create({
    type: "student",
    firstName: "Ziyal",
    lastName: "Tora",
    YOB: "2364",
    email: "tora.ziyal@cardassiaprime.com",
    avatar: "Rough starts happen.",
    interest: "Interspecies diplomacy.",
    timeZone: "Pacific"
  });
  await userModel.create({

    type: "student",
    firstName: "Five",
    lastName: "Weyoun",
    YOB: "2400",
    email: "five.weyoun@vortania.com",
    avatar: "so much the same",
    interest: "Shiny lights.",
    timeZone: "Eastern"

  });

  mongoose.disconnect();
  console.log('Mischief managed!');
}

seedUsers();