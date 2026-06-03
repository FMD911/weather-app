import "./style.css";
import { fetchWeather } from "./weather.js";
import { displayWeather } from "./display.js";

const input = document.querySelector("#cityInput");
const button = document.querySelector("#searchBtn");

button.addEventListener("click", async () => {
  const city = input.value;

  const data = await fetchWeather(city);

  displayWeather(data);
});

console.log("Weather app started");