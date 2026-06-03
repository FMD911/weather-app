import getWeather from "./weather";
import displayWeather from "./display";
import "./style.css";

const form = document.querySelector("#searchForm");
const input = document.querySelector("#cityInput");
const errorBox = document.querySelector("#error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = input.value.trim();

  if (!city) return;

  errorBox.textContent = "";

  try {
    const data = await getWeather(city);
    displayWeather(data);
  } catch (err) {
    errorBox.textContent = "City not found. Try again.";
  }
});