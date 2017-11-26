const express = require('express');
const app = express();

const superagent = require('superagent');
require('dotenv').config()

const ROOT_URL = 'http://api.translink.ca';
const API_KEY = process.env.TRANSLINK_API_TOKEN;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/translink/buses', (request, response) => {
  superagent
  .get(`${ROOT_URL}/RTTIAPI/V1/buses?apiKey=${API_KEY}`)
  .set('Accept', 'application/json')
  .end((error, res) => {
    response.json(res.body);
  });
});

app.listen(4000, function () {
  console.log(`Listening on port 4000`);
});
