import "./style.css";
import { fetchWeather } from "./weather.js";

const input = document.querySelector("#cityInput");
const button = document.querySelector("#searchBtn");

button.addEventListener("click", async () => {
  const city = input.value;

  const data = await fetchWeather(city);

  console.log(data);
});

console.log("Weather app started");