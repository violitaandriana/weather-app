import Weather from './weather.js';
import Forecast from './forecast.js';

export default class weatherAPI {
  constructor(url, key) {
    this.url = url;
    this.key = key;
    this.queryParam = '';
    this.cityParam = '';
    this.weatherMap = new Map();
  }

  // builder function
  buildQuery() {
    // cons - lack missing param validation
    this.queryParam = `${this.url}/forecast.json?key=${this.key}&q=${this.cityParam}&days=3`;
    return this;
  }

  city(cityParam) {
    this.cityParam = cityParam;
    return this;
  }

  // executor function
  async getWeather() {
    this.buildQuery();
    try {
      const response = await fetch(this.queryParam, { mode: 'cors' });
      const data = await response.json();

      // Current Day
      const currentWeather = new Weather(this.cityParam, data);

      const days = data.forecast.forecastday;
      // Second Day Forecast
      const secondDay = days[1];
      const secondDayWeather = new Forecast(this.cityParam, secondDay);

      // Third Day Forecast
      const thirdDay = days[2];
      const thirdDayWeather = new Forecast(this.cityParam, thirdDay);

      // buat 3 objects -> hari ini, besok, lusa
      this.weatherMap.set('today', currentWeather);
      this.weatherMap.set('tomorrow', secondDayWeather);
      this.weatherMap.set('afterTomorrow', thirdDayWeather);

      return this.weatherMap;
    } catch (error) {
      console.log(error.message);
    }
  }

  // reset agar array di-set kosong sblm diisi array dengan city yang baru
  resetWeather() {
    this.weatherMap = new Map();
  }
}
