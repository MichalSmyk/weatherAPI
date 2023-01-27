const WeatherClient = require('./weatherClient');


class Weather {
    constructor(client) {
        this.client = client;
        this.weatherData;
    }
        
    async load(city){
        this.weatherData = await this.client.fetchWeatherData(city)
           
    }
    
    getWeatherData(){
        return this.weatherData
    }
};

module.exports = Weather;