/* Global Variables */
import postData from "./postData";

/* Function to GET Web API Data*/

/* Function to POST data */
  //Get input value and call first method getCity(async/await)



  //Use values returned from API (lat, lon) to call next method
  //Then with the result call the third API


const handleSubmission = (e) => {
  
  const userInput = document.getElementById("city").value;
  console.log(`This is the user's unput ${userInput}`);
  const data = postData("http://localhost:8000/city", { userInput });
  console.log("Data from API in Front end: ", data);
}



export default handleSubmission;