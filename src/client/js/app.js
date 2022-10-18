import { postData } from './request';
import { setIcons } from './setIcons'
import { setImg } from './setImg'
import getWeather from '../../../functions/weather';
import getCity from '../../../functions/city';


// Getting all trip details that will then be passed to the updateUI() to be displayed to the end user
export const getTripDetails = async city => {
        let allData = [];
        let response = null;
        //this awaits the endpoint to return with the city details of the input the user entered
        const cityData = await postData(getCity, { city });
        //if the data was returned then destructure lat & lon
        if (cityData) {
            response = { city };
            allData.push(city);
            const { lat, lon } = cityData;
            //call the weather api with the lat & lon obtained from the above step
            const weather = await postData(getWeather, { lat, lon });
            if (weather) {
                const { data: weatherData } = weather;
                //extracting the exact part of the response object with daily information
                const { daily } = weatherData;
                const { summary, icon } = daily;
                response.summary = summary;
                response.icon = icon;
                allData.push(summary, icon);
                setIcons(icon, document.querySelector(".icon"));
            }
            fetch(`https://pixabay.com/api/?key=16086675-eba9ea2a392ce2c4e2ca4c2d7&q=${city}&image_type=photo&category=travel`) //calling the pixabay api
                .then(data => {
                    return data.json();
                })
                .then(res => {
                    const pixImg = res.hits[0].webformatURL;
                    allData.push = pixImg;
                    setImg(pixImg); // calling the function that appends the image to the DOM
                })
        }
        updateUI(allData);
        return response;
    }
    // This function will update the DOM and display the results to the end user
const updateUI = allData => {
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
        alert("Unexpected error", error);
    }
}