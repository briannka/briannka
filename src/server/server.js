// Imported functions
const geonames = require('./geonames');
const fetch = require('node-fetch');

// Setup empty JS object to act as endpoint for all routes
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use('/', express.static(path.join(__dirname, '../client/views')));

app.post("/city", (req, res) => {
  const searchedCity = req.body.city;
  console.log(searchedCity);
  geonames
    .getCity(searchedCity)
    .then( (result) => {
      console.log('Result is ', result);
      res.send(JSON.stringify(result));
    })
    .catch( err => {
      res.status(500).send('No Results');
    })
});

app.get("/weather", (req, res) => {
<<<<<<< Updated upstream
  const secretKey = 'a53b81b6e6aaa6c4367dfe55c5001474';
  const url = `https://api.darksky.net/forecast/${secretKey}/40.71427,-74.00597`;
=======
  const lat = req.body.lat;
  const lon = req.body.lon;
  console.log('This is the lat' + lat);
  console.log('This is the lon' + lon);
  weatherData.lat = lat;
  weatherData.lon = lon;
  const secretKey = 'a53b81b6e6aaa6c4367dfe55c5001474';
  const url = 'https://api.darksky.net/forecast/:secretKey/:lat,:lon';
  console.log(url);
>>>>>>> Stashed changes
  fetch(url)
  .then(res => res.json())
  .then(data => {
      res.send({ data });
      console.log(data);
  })
  .catch(err => {
      res.send(err);
  });
})


const port = 8000;
app.listen(port, () => {
  console.log('this is working');
  console.log(`running on localhost: ${port}`);
});
