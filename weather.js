const WeatherClient = require('./weatherClient');


class Weather {
    constructor(client) {
        this.client = client;
        this.data;
    }
        
    async load(city){
        this.data = await this.client.fetchWeatherData(city)
            // .then((data) => {
            //     this.weatherData = data;
            // })
    }
    // load(place) {
    //     return new Promise((resolve, reject) => {
    //       this.client.fetchWeatherData(place)
    //         .then(data => {
    //           this.weatherData = data;
    //           resolve();
    //         })
    //         .catch(err => reject(err));
    //     });
    //   }

    getWeatherData(){
        return this.data
           
    }
}

module.exports = Weather;