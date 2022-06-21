'use strict';

//Requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();  // this instantiates a new express server (VP)


// VP - making an api call to MultiAvatar using axios
// const url = `https://api.multiavatar.com/Starcrasher.png?apikey=${process.env.MY_API_KEY}`;
// const axiosResults = await axios.get(url);
// console.log(axiosResults.data);


//middleware
app.use(cors());

//Local imports
const PORT = process.env.PORT || 3002;

//Test route
app.get('/test', (request, response) => {
  response.send('testing testing... is this thing on?');
});

//Home route (VP 6/19/2022)
app.get('/', (request, response) => {
  response.send('This home route test message is coming from the server going to the client. Did it work? Testing testing... is this thing on?');
});

//Route for handling userInfo.json requests (VP 6/19/2022)
app.get('./data/userInfo', (request, response) => {
  const type = request.query.type;
  console.log('type of user requested: ', type);
  const resultingUserList = new UserListByType(type);
  console.log('Users of this type are: ', resultingUserList);
  response.send(resultingUserList);
});

class UserListByType {  // This filters the userInfo.json data by user type (VP 6/19/2022)
  static userList = require('./data/userInfo.json');
  constructor(type) {
    this.userDetails = UserListByType.userList.data.filter(infoObj => infoObj.type === type);
  }
}


//PORT check in, always has to be last thing on file
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
