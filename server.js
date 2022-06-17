'use strict';

//Requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

//middleware
app.use(cors());

//Local imports
const PORT = process.env.PORT || 3001;

//Test route
app.get('/test', (request, response) => {

  response.send('testing testing... is this thing on?');

});


//PORT check in, always has to be last thing on file
app.listen(PORT, () => console.log(`listening on ${PORT}`));
