'use strict';

//Requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getUsers, deleteUser, createUser, updateUser } = require('./modules/handlers');
const app = express();  // this instantiates a new express server (VP)

// mongoose code added back from userInfoSeed.js (VP)
const mongoose = require('mongoose');
const userInfoModel = require('./models/userInfo');
const { create } = require('./models/userInfo');
mongoose.connect(process.env.MONGODB_CONNECT);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Your Special Ops Mongeese have infiltrated Atlas!');
});

//middleware
app.use(cors());
app.use(express.json());  // needed to create, if not included you will get a 500 error on ThunderClient

//Local imports
const PORT = process.env.PORT || 3002;

// GET route for the handler
app.get('/userInfo', getUsers);
app.delete('/userInfo/:id', deleteUser);
app.post('/userInfo', createUser);
app.put('/userInfo/:id', updateUser);

//Test route
app.get('/test', (request, response) => {
  response.send('testing testing... is this thing on?');
});

//Home route (VP 6/19/2022)
app.get('/', (request, response) => {
  response.send('This home route test message is coming from the server going to the client. Did it work? Testing testing... is this thing on?');
});


class UserListByType {  // This filters the userInfo.json data by user type (VP 6/19/2022)
  static userList = require('./data/userInfo.json');
  constructor(type) {
    this.userDetails = UserListByType.userList.data.filter(infoObj => infoObj.type === type);
  }
}
// This is express errror handling (facilitated by cors) - this must be the LAST app.use in the file -it's a rule
app.use((error, request, response, next) => {
  response.status(500).send(`Something went wrong on our end... but Vida didn't do it! ${error.message}`);
});


app.get('/avatar', (request, response) => {
  let avatarId = 'Binx Bond' //request.query.username
  fetch('https://api.multiavatar.com/' + JSON.stringify(avatarId))
    .then(response => response.text())
    .then(svg => console.log(svg))
})


//PORT check in, always has to be last thing on file
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

