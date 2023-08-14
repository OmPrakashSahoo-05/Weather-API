function getWeatherData(location) {
    const apiKey = "d8d74ff83c2199781f1b0fd3f4cd5673"; // api key from openweathermap website
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    return fetch(url) // fetch func commonly fetches data from apis
      .then(response => response.json()) // returns the Promise which is response to the request, response is parsed
      .then(data => { // then method handles data asynchronously 
        const weatherData = {
          temperature: data.main.temp,
          condition: data.weather[0].main,
          location: data.name,
        };
        return weatherData; // returns all 3 values
      });
  }

  function updateUI(weatherData) {
    const temperature = document.querySelector("#temperature"); // selecting the query from the html file
    const condition = document.querySelector("#condition"); 
    const location = document.querySelector("#location");
  
    temperature.textContent = `${weatherData.temperature}°C`; // updating them
    condition.textContent = weatherData.condition;
    location.textContent = weatherData.location;
  }

const searchBtn = document.querySelector("#search-btn");// search button 
const searchBar = document.querySelector("#search-bar");// text value

searchBtn.addEventListener("click", () => {
  const location = searchBar.value; // getting the value of the text
  getWeatherData(location) // function call passing the location as the parameter
    .then(weatherData => { // after retrieving the returned value from the function 
      updateUI(weatherData); // call another function passing the returned val of first func as parameter
    })
    .catch(error => { // catching any sort of error if arises
      console.log(error); // showing the error on screen
    });
});
