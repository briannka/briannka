import { postData, getData } from './js/request';
import { getIcons } from './js/icons.js';
import '../styles/styles.scss';

export const getTripDetails = async city => {
  let allData = [];
  let response = null;
  const cityData = await postData('http://localhost:8080/city', { city });
  if(cityData) {
    response = {city};
    allData.push(city);
    const { lat, lon } = cityData;
    const weather = await postData('http://localhost:8080/weather', { lat, lon });
    if(weather) {
      const { data: weatherData } = weather;
      const { daily } = weatherData;
      const { summary, icon } = daily;
      response.summary = summary;
      response.icon = icon;
      // let iconImg = getIcons(icon);
      // console.log(iconImg);
      allData.push(summary, icon);
    }
  const image = await getData('http://localhost:8080/img', city);
  fetch(`https://pixabay.com/api/?key=16086675-eba9ea2a392ce2c4e2ca4c2d7&q=${city}&image_type=photo&category=travel`)
  .then( data => {
    return data.json();
  })
  .then (res => {
    const pixImg = res.hits[0].webformatURL;
    console.log(pixImg);
    allTrips.push = pixImg;
    return pixImg;
  })
}
  updateUI(allData);
  return response;
}

const updateUI = async allData => {
  try {
    const [
      searchedCity,
      summary,
      icon,
      pixImg
     ] = allData;
    const cityValue = document.getElementById("cityValue");
    const summaryRes = document.getElementById("summaryRes");
    const iconRes = document.getElementById("iconRes");
    const imgRes = document.getElementById("image");
    // const imgContainer = document.createElement("img");
    cityValue.innerHTML = `You searched for ${searchedCity}`;
    summaryRes.innerHTML = `The expected weather there is ${summary}`;
    iconRes.innerHTML = `${icon}`;
    const imageCreation = new Image();
    imageCreation.src = pixImg;
    imgRes.appendChild(pixImg);
    // imgContainer.appendChild(imageCreation);
  } catch (error) {
    console.log("error", error);
  }
}


let allTrips = [];
// const handleAdd = () => {}
// const handleRemove = () => {}
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
  const startDate = document.getElementById('start_date').value;
  const tripDetails = await getTripDetails(city, startDate);
  // const tripDetails = await getTripDetails(city);
  // createTripDetails(tripDetails)
  // allTrips.push(tripDetails);
});
