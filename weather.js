const apiKey = '3a4ce32c75b33a443b047dd86d70e74b';  
const searchBtn = document.getElementById('searchBtn');
const citySelect = document.getElementById('citySelect');
const weatherInfo = document.getElementById('weatherInfo');
const extendedForecast = document.getElementById('extendedForecast');

// Event listener for search button
searchBtn.addEventListener('click', () => {
    const city = citySelect.value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please select a city.");
    }
});

// Function to fetch weather data by city name
function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
                fetchExtendedForecast(city);
            } else {
                alert("City not found.");
            }
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            alert("Failed to retrieve weather data.");
        });
}

// Function to display current weather
function displayWeather(data) {
    weatherInfo.innerHTML = `
        <h2 class="text-xl font-bold">${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

// Function to fetch extended forecast for the city
function fetchExtendedForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayExtendedForecast(data.list);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
}

// Function to display extended forecast
function displayExtendedForecast(forecast) {
    extendedForecast.innerHTML = '<h3 class="text-lg font-bold mb-2">5-Day Forecast</h3>';
    const days = forecast.filter((reading) => reading.dt_txt.includes("12:00:00"));
    
    days.forEach(day => {
        extendedForecast.innerHTML += `
            <div class="border p-2 mb-2 bg-white bg-opacity-25 rounded-lg">
                <p>Date: ${day.dt_txt.split(" ")[0]}</p>
                <p>Temp: ${day.main.temp}°C</p>
                <p>Wind: ${day.wind.speed} m/s</p>
                <p>Humidity: ${day.main.humidity}%</p>
                <p>Condition: ${day.weather[0].description}</p>
            </div>
        `;
    });
}
