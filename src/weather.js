const API_KEY = "R7MHSBMT7Y9PK7U9LQHW7KZ8N";

async function getWeather(city) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    return formatWeather(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function formatWeather(data) {
  return {
    location: data.resolvedAddress,
    description: data.description,
    current: {
      temp: data.currentConditions.temp,
      feelsLike: data.currentConditions.feelslike,
      humidity: data.currentConditions.humidity,
      wind: data.currentConditions.windspeed,
      condition: data.currentConditions.conditions,
    },
    forecast: data.days.slice(0, 5).map((day) => ({
      date: day.datetime,
      temp: day.temp,
      condition: day.conditions,
    })),
  };
}

export default getWeather;