'use strict';

//Requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getUsers = require('./modules/handlers');
const app = express();  // this instantiates a new express server (VP)

// VP - making an api call to MultiAvatar using axios
// const url = `https://api.multiavatar.com/Starcrasher.png?apikey=${process.env.MY_API_KEY}`;
// const axiosResults = await axios.get(url);
// console.log(axiosResults.data);

// mongoose code added back from userInfoSeed.js (VP)
const mongoose = require('mongoose');
const userInfoModel = require('./models/userInfo');
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



//Test route
app.get('/test', (request, response) => {
  response.send('testing testing... is this thing on?');
});

//Home route (VP 6/19/2022)
app.get('/', (request, response) => {
  response.send('This home route test message is coming from the server going to the client. Did it work? Testing testing... is this thing on?');
});

//Route for handling userInfo.json requests (VP 6/19/2022)
app.get('/userInfo', (request, response) => {
  const type = request.query.type;
  console.log('type of user requested: ', type);
  const resultingUserList = new UserListByType(type);
  console.log('Users of this type are: ', resultingUserList);
  response.send(resultingUserList);
});

app.post('/userInfo', async (request, response) => {
  try {
    const newUser = await userInfoModel.create(request.body);
    response.status(201).send(newUser); // sends new user that has been created in MongoDB back to the client to be saved in the state object
  } catch (error) {
    console.error(error);
    response.status(500).send('Error when creating new user.');
  }
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

//PORT check in, always has to be last thing on file
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
