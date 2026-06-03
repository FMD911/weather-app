export async function fetchWeather(city) {
  console.log("City received:", city);

  const geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );

  const geoData = await geoResponse.json();

  console.log(geoData);

  // SAFETY CHECK
  if (!geoData.results || geoData.results.length === 0) {
    console.log("City not found");
    return;
  }

  const location = geoData.results[0];

  const weatherResponse = await fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,weathercode&current_weather=true`
    );

    const weatherData = await weatherResponse.json();

    const current = {
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        weathercode: weatherData.current_weather.weathercode
    };

    const hourly = weatherData.hourly.time.map((time, index) => {
  return {
    time: time,
    temperature: weatherData.hourly.temperature_2m[index],
    humidity: weatherData.hourly.relative_humidity_2m[index],
    rainChance: weatherData.hourly.precipitation_probability[index],
    weathercode: weatherData.hourly.weathercode[index]
    };
    });

    return {
        current,
        hourly
    };

    console.log("Location:", location);
}
