const WeatherClient = require('./weatherClient');
const Weather = require('./weather');

describe('weather class', () => {
  let weather;
  const mockClient = {
    fetchWeatherData: jest.fn(),
  };

  beforeEach(() => {
    weather = new Weather(mockClient);
  });

  it('load() loads city weathr data, getWeatherData() returns it', (done) => {
    
    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: 'london',
      temp: 8,
    });
    weather.load("london").then(() => {
      expect(mockClient.fetchWeatherData).toHvaeBeenCalledWith('london');
      const data = weather.getWeatherData();
      expect(data.name).toBe("london");
      expect(data.temp).toBe(8);
      done();
    })
  })
})