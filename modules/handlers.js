'use strict'

// Step 1: our handlers should grab the properties of the user to be created from the request object, and create an object-literal representation of a user with these properities. We should then be able to add the new user (in the first use case this would be a newly registering user) to the database.

// We should be able to test that the code we draft for step 1 is working by using ThunderClient.

const userModel = require('../models/userInfo'); //grab the properties of the user to be created

async function getUsers(request, response, next) {  //next passes control on to error handling
  try {
    const user = await userModel.find({ type: request.query.type });
    response.status(200).send(user);
  }
  catch (error) {
    console.error(error);
    next(error);
  }
}

// started drafting createUser method -incomplete (VP)
async function createUser(request, response, next) {
  try {
    const newUser = await userModel.create(request.body);
    response.status(201).send(newUser);
  } catch (error) {
    error.customMessage = 'Something went wrong when creating the users';
    console.error(error.customMessage + error);
    next(error);
  }
}

async function updateUser(request, response, next) {
  try {
    //Model.findByIdAndUpdate(id, updateData, options)
    const updatedUser = await userModel.findByIdAndUpdate(request.params.id, request.body, { new: true, overwrite: true });
    response.status(200).send(updatedUser);
  } catch (error) {
    error.customMessage = 'Something went wrong when updating the user';
    console.error(error.customMessage + error);
    next(error);
  }
}

async function deleteUser(request, response, next) {
  try {
    await userModel.findByIdAndDelete(request.params.id);
    response.status(200).send('User was successfully deleted');
  } catch (error) {
    error.customMessage = 'Something went wrong when deleting the user';
    console.error(error.customMessage + error);
    next(error);
  }
}
module.exports = { getUsers, createUser, deleteUser, updateUser };
