function getWeatherEmoji(code) {
  if (code === 0) return "☀️"; // clear
  if (code <= 2) return "🌤️"; // mostly clear / partly cloudy
  if (code <= 3) return "☁️"; // cloudy

  if (code >= 45 && code <= 48) return "🌫️"; // fog

  if (code >= 51 && code <= 67) return "🌧️"; // drizzle/rain
  if (code >= 71 && code <= 77) return "❄️"; // snow

  if (code >= 80 && code <= 99) return "🌧️"; // heavy rain/thunder

  return "❓";
}

export function displayWeather(data) {
  const weatherDisplay = document.querySelector("#weatherDisplay");

  const emoji = getWeatherEmoji(data.current.weathercode);

  weatherDisplay.innerHTML = `
    <h2>Current Weather</h2>
    <p>${emoji}</p>
    <p>🌡️ Temperature: ${data.current.temperature}°C</p>
    <p>💨 Wind: ${data.current.windspeed} km/h</p>
  `;
}

const hourlyContainer = document.querySelector("#hourlyForecast");

hourlyContainer.innerHTML = "";

data.hourly.slice(0, 24).forEach((hour) => {
  const emoji = getWeatherEmoji(hour.weathercode);

  const time = new Date(hour.time).getHours();

  const div = document.createElement("div");

  div.innerHTML = `
    <p>
      ${time}:00 ${emoji} ${hour.temperature}°C 💧${hour.rainChance}%
    </p>
  `;

  hourlyContainer.appendChild(div);
});