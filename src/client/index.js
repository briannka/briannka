import handleFormSubmit from './js/app';
const form = document.getElementById("form");
console.log(form);
console.log('This is working');
form.addEventListener('submit', handleFormSubmit);



<<<<<<< Updated upstream
document.getElementById("submit").addEventListener("click", handleSubmit);
=======
const data = await getData(`http://localhost:8080/weather,${lat},${lon}`);

const daily = data.daily.summary;
console.log(daily);
const dailyIcon = data.daily.icon;
console.log(dailyIcon);


// const { lat, lon } = await postData('http://localhost:8080/city', { city })
// const weather = await postData('http://localhost:8080/weather', { lat, lon });
console.log(data);
return { city, weather };

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
const startDate = document.getElementById('start_date').value;

const tripDetails = await getTripDetails(city, startDate);

  // const tripDetails = await getTripDetails(city);

  // createTripDetails(tripDetails)

  // allTrips.push(tripDetails);
});
>>>>>>> Stashed changes
