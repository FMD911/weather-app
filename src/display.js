function displayWeather(data) {
  const container = document.querySelector("#weather");

  container.innerHTML = "";

  const location = document.createElement("h2");
  location.textContent = data.location;

  const desc = document.createElement("p");
  desc.textContent = data.description;

  const current = document.createElement("div");
  current.classList.add("current");

  current.innerHTML = `
    <h3>Current Weather</h3>
    <p><strong>Temperature:</strong> ${data.current.temp}°C</p>
    <p><strong>Feels like:</strong> ${data.current.feelsLike}°C</p>
    <p><strong>Condition:</strong> ${data.current.condition}</p>
    <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
    <p><strong>Wind:</strong> ${data.current.wind} km/h</p>
  `;

  const forecast = document.createElement("div");
  forecast.classList.add("forecast");

  const title = document.createElement("h3");
  title.textContent = "5-Day Forecast";

  const list = document.createElement("div");
  list.classList.add("forecast-grid");

  data.forecast.forEach((day) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <p><strong>${day.date}</strong></p>
      <p>${day.temp}°C</p>
      <p>${day.condition}</p>
    `;

    list.appendChild(card);
  });

  forecast.appendChild(title);
  forecast.appendChild(list);

  container.appendChild(location);
  container.appendChild(desc);
  container.appendChild(current);
  container.appendChild(forecast);
}

export default displayWeather;