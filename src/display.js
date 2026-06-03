export function displayWeather(data) {
  const weatherDisplay = document.querySelector("#weatherDisplay");

  weatherDisplay.innerHTML = `
    <h2>Current Weather</h2>
    <p>🌡️ Temperature: ${data.current.temperature}°C</p>
    <p>💨 Wind: ${data.current.windspeed} km/h</p>
  `;
}