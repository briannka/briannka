import { postData, getData } from './js/request';
import '../styles/styles.scss';
import { Skycons } from './js/skycons.js';

export const getTripDetails = async city => {
  let allData = [];
  let response = null;
  const cityData = await postData('http://localhost:8080/city', { city });
  if(cityData) {
    response = { city };
    allData.push(city);
    const { lat, lon } = cityData;
    const weather = await postData('http://localhost:8080/weather', { lat, lon });
    const image = await getData('http://localhost:8080/img', city);
    if(weather) {
      const { data: weatherData } = weather;
      const { daily } = weatherData;
      const { summary, icon } = daily;
      response.summary = summary;
      response.icon = icon;
      allData.push(summary, icon);
      setIcons(icon, document.querySelector(".icon"));
    }
    fetch(`https://pixabay.com/api/?key=16086675-eba9ea2a392ce2c4e2ca4c2d7&q=${city}&image_type=photo&category=travel`)
    .then( data => {
      return data.json();
    })
    .then (res => {
      const pixImg = res.hits[0].webformatURL;
      allData.push = pixImg;
      setImg(pixImg);
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
     ] = allData;
    const cityValue = document.getElementById("cityValue");
    const summaryRes = document.getElementById("summaryRes");
    cityValue.innerHTML = `You searched for ${searchedCity}`;
    summaryRes.innerHTML = `The expected weather there is ${summary}`;
  } catch (error) {
    console.log("error", error);
  }
}
// STARTING POINT 

const button = document.getElementById("submit");
button.addEventListener('click', async e => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const startDate = document.getElementById('start_date').value;
  const tripDetails = await getTripDetails(city, startDate);
});

const setIcons = (icon, iconID) => {
  const skycons = new Skycons({color: "white"});
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  skycons.play();
  return skycons.set(iconID, Skycons[currentIcon]);
}

const setImg = (pixImg) => {
  const imgLocation = document.getElementById("image");
  imgLocation.setAttribute("src", pixImg);
}