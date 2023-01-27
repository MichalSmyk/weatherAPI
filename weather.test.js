const WeatherClient = require('./weatherClient');
const Weather = require('./weather');

describe('weather class', () => {
  let weatherMock;
  let client;
  const mockClient = {
    fetchWeatherData: jest.fn(),
  };

  beforeEach(() => {
    weatherMock = new Weather(mockClient);
    client = new WeatherClient(client);
  });

  it('load() loads city weathr data, getWeatherData() returns it', (done) => {
    
    mockClient.fetchWeatherData.mockResolvedValueOnce({
      name: 'london',
      temp: 8,
    });
    weatherMock.load("london").then(() => {
      expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('london');
      const data = weatherMock.getWeatherData();
      expect(data.name).toBe("london");
      expect(data.temp).toBe(8);
      done();
    })
  });
})