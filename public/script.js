//need the site to go out and get the data. Done through a fetch
//we're calling our own server/endpoint 
function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value.toLowerCase();

    fetch(/weather/${cityName})
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error(error);
            document.getElementById('weatherInfo').innerText = 'City not found';
        });
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>${weatherData.city}</h2>
                            <p>Temperature: ${weatherData.temp}°F</p>
                            <p>Condition: ${weatherData.condition}</p>
                            <p>Precipitation: ${weatherData.precipitation}</p>`;
}