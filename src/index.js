import "./style.css";

console.log("Weather app started");

async function getWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=44.2751&longitude=19.8982&hourly=temperature_2m"
  );

  const data = await response.json();

  console.log(data);
}

getWeather();