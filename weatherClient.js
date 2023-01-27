const apiKey = require('./apiKey')

class WeatherClient {

    constructor(){}

    fetchWeatherData(city){
        return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((weatherData) => {
                return weatherData
            });
    };
};


module.exports = WeatherClient;

