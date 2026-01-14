// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get button and attach click event
    const button = document.getElementById("checkBtn");
    button.addEventListener("click", async function() {

        const city = document.getElementById("cityInput").value.trim();
        const apiKey = "dae0550232d5da4e3a44deaf62e3f5d8"; 
        const resultDiv = document.getElementById("result");

        if (!city) {
            resultDiv.innerHTML = "❌ Please enter a city name";
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.cod !== 200) {
                resultDiv.innerHTML = "❌ City not found";
                return;
            }

            resultDiv.innerHTML = `
                <h3>${data.name}</h3>
                <p> Temperature: ${data.main.temp} °C</p>
                <p> Weather: ${data.weather[0].description}</p>
                <p> Humidity: ${data.main.humidity}%</p>
                <p> Wind: ${data.wind.speed} m/s</p>
            `;

        } catch (err) {
            resultDiv.innerHTML = "❌ Error fetching weather data";
        }

    });

});

