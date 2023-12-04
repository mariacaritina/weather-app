//need the site to go out and get the data. Done through a fetch
//we're calling our own server/endpoint 
        // Fetch weather data from the server
        function getWeather() {
//retrieves the value entered in the HTML with 'cityInput'
            const city = document.getElementById('cityInput').value;
            fetch('/weather')
                .then(response => {
//Handles the promise returned by the "fetch". Receives a response from the server
                    if (!response.ok) {
                        throw new Error('HTTP error! Status: ' + response.status);
                    }
                    return response.json();
                })
//if the response is successful, the code reads the response body as JSON and returns another promise with the data
                .then(data => {
                    console.log('Weather data received:', data);
                  const cityWeather = data.find(item => item.city.toLowerCase() === city.toLowerCase());
//Finds the weather information for the specified city within the data  
                    if (cityWeather) {
//see that the weather information was found in the data
                        const weatherContainer = document.getElementById('weather-container');
                        weatherContainer.innerHTML = '';
//sets the content of the 'weather container' to an empty string
                        const cityElement = document.createElement('div');
//creates a new div element. Will contain the weather information for the specified city
                        cityElement.innerHTML = `
                            <h2>${cityWeather.city}</h2>
                            <p>Temperature: ${cityWeather.temp}°F</p>
                            <p>Condition: ${cityWeather.condition}</p>
                            <p>Precipitation: ${cityWeather.precipitation}</p>
                            <hr>
                        `;
//uses a template literal to create an HTML structure for the weather information. It includes an h2
//element for the city name and paragraphs for temp, condition and percipitation. 
                        weatherContainer.appendChild(cityElement);
                    } else {
                        alert('City not in database.');
                    }
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    alert('An error occurred. Please try again.');
                });
        }