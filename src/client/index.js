import handleFormSubmit from './js/app';
const form = document.getElementById("form");
console.log(form);
console.log('This is working');
form.addEventListener('submit', handleFormSubmit);



document.getElementById("submit").addEventListener("click", handleSubmit);
