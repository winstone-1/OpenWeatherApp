const LocationAPIKey = "b665d211ec5a8d340c2dbde857512e70";

let form = document.getElementById("Location-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    let locationInput = document.getElementById("city-input");

    if (city ) {
        getWeather(locationInput.value);
    } 
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${LocationAPIKey}&units=metric`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const weatherData = await response.json();
        const { name, main, weather } = weatherData;
        console.log(weatherData);

        displayWeather({ name, main, weather });

        function displayWeather(weatherData) {
    const resultDiv = document.getElementById("weather-result");
    resultDiv.innerHTML = `
        <h2>Weather in ${weatherData.name}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Description: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
    `;
}

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}



getWeather("Nairobi"); // Default location on page load