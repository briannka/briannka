import { postData, getData } from './request';
import { setIcons } from './setIcons'
import { setImg } from './setImg'

export const getTripDetails = async city => {
    let allData = [];
    let response = null;
    const cityData = await postData('http://localhost:8080/city', { city });
    if(cityData) {
      response = { city };
      allData.push(city);
      const { lat, lon } = cityData;
      const weather = await postData('http://localhost:8080/weather', { lat, lon });
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
      const summaryLowerCased = summary.charAt(0).toLowerCase() + summary.slice(1);
      cityValue.innerHTML = `You are going to ${searchedCity}`;
      summaryRes.innerHTML = `The expected weather there is ${summaryLowerCased}`;
    } catch (error) {
      console.log("error", error);
    }
  }