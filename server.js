'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/avatar', (request, response) => {
  let avatarId = 'Binx Bond' //request.query.username
  fetch('https://api.multiavatar.com/' + JSON.stringify(avatarId))
    .then(response => response.text())
    .then(svg => console.log(svg))
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
