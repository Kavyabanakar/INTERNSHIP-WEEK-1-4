document.getElementById('searchBtn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city').value.trim();
    const apiKey = '25d5143e1688550d669ba06910c2203f'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city === '') {
        displayMessage("Please enter a city name.", true);
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                displayMessage("City not found. Try again!", true);
                return;
            }
            if (data.cod === 401) {
                displayMessage("Invalid API key. Please check your key.", true);
                return;
            }

            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            document.getElementById('weather').innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <img src="${icon}" alt="${data.weather[0].description}">
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
        })
        .catch(() => {
            displayMessage("Network error. Please check your connection.", true);
        });
}

function displayMessage(msg, isError) {
    document.getElementById('weather').innerHTML = `<p style="color:${isError ? 'red' : 'white'}">${msg}</p>`;
}
