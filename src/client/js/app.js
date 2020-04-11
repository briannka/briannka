import { postData } from './request';

export const handleFormSubmit =  async e => {
  e.preventDefault();

  const city = document.getElementById('city').value;

  const cityData = await postData('http://localhost:8080/city', { city });

  const { lat, lon } = cityData;

  const weather = await postData('http://localhost:8080/weather', { lat, lon });

  // const { lat, lon } = await postData('http://localhost:8080/city', { city })
  // const weather = await postData('http://localhost:8080/weather', { lat, lon });
}
