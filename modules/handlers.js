'use strict'

// Step 1: our handlers should grab the properties of the user to be created from the request object, and create an object-literal representation of a user with these properities. We should then be able to add the new user (in the first use case this would be a newly registering user) to the database.

// We should be able to test that the code we draft for step 1 is working by using ThunderClient.

const userModel = require('../models/userInfo'); //grab the properties of the user to be created

async function getUsers (request, response, next) {  //next passes control on to error handling
  try {
    const user = await userModel.find({});
    response.status(200).send(user);
    }
  catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = getUsers;
