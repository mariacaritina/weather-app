//need the site to go out and get the data. Done through a fetch
//we're calling our own server/endpoint 
        // Fetch weather data from the server
        function getWeather() {
            const city = document.getElementById('cityInput').value;
            fetch(/weather/${city})
                .then(response => {
                    if (!response.ok) {
                        throw new Error('City not found');
                    }
                    return response.json();
                })
                .then(data => {
                    const weatherContainer = document.getElementById('weather-container');
                    weatherContainer.innerHTML = '';
                    const cityElement = document.createElement('div');
                    cityElement.innerHTML = `
                        <h2>${data.city}</h2>
                        <p>Temperature: ${data.temp}°F</p>
                        <p>Condition: ${data.condition}</p>
                        <p>Precipitation: ${data.precipitation}</p>
                        <hr>
                    `;
                    weatherContainer.appendChild(cityElement);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    alert('City not found. Please try again.');
                });
        }