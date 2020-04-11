import { postData } from './js/request';

export const getTripDetails =  async city => {
  const cityData = await postData('http://localhost:8080/city', { city });

  const { lat, lon } = cityData;

  const { data: weather } = await postData('http://localhost:8080/weather', { lat, lon });

  const daily = weather.daily;

  return { city, weather };

  // const { lat, lon } = await postData('http://localhost:8080/city', { city })
  // const weather = await postData('http://localhost:8080/weather', { lat, lon });
}

let allTrips = [];

const handleAdd = () => {}

const handleRemove = () => {}

const createTripDetails = tripDetails => {
  const container = document.getElementById('container');

  /// create dom -> <button onclick="handleAdd">Add</button> <button>Remove</button>

  container.appendChild() // and append the created dom
}

// STARTING POINT 
const button = document.getElementById("submit");

button.addEventListener('click', async e => {
  e.preventDefault();

  const city = document.getElementById('city').value;
  // const startDate = document.getElementById('start_date').value;
  // const endDate = document.getElementById('end_date').value;

  //const tripDetails = await getTripDetails(city, startDate, endDate);
  const tripDetails = await getTripDetails(city);

  // createTripDetails(tripDetails)

  allTrips.push(tripDetails);
});
