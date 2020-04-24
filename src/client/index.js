import '../styles/styles.scss';
import { getTripDetails } from './js/app'

// STARTING POINT 
const button = document.getElementById("submit");
button.addEventListener('click', async e => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const startDate = document.getElementById('date_input').value;
  if(city && startDate) {
    getTripDetails(city, startDate);
  }
  else {
    const error = city ? "Please enter a start date" : "Please enter a city";
    alert(error);
  }
});
