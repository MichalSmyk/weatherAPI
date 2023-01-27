const WeatherClient = require('./weatherClient');
const apiKey = require('./apiKey');

const client = new WeatherClient(apiKey);

client.fetchWeatherData('London').then((weatherData) => {
  console.log(`Weather data for ${weatherData.name}:`)
  console.log(weatherData);
});