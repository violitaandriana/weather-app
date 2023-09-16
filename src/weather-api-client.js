import Weather from './weather.js';

export default class weatherAPI {
  constructor(url, key) {
    this.url = url;
    this.key = key;
    this.queryParam = '';
    this.cityParam = '';
    this.weatherArray = [];
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
      const currentDay = data.current;
      const currentWeather = new Weather(
        this.cityParam,
        currentDay.temp_c,
        currentDay.condition.text,
        currentDay.last_updated,
        data.location.localtime,
      );

      // Second Day Forecast
      const days = data.forecast.forecastday;
      const secondDay = days[1];
      const secondDayWeather = new Weather(
        this.cityParam,
        secondDay.day.avgtemp_c,
        secondDay.day.condition.text,
        currentDay.last_updated,
        secondDay.date,
      );

      // Third Day Forecast
      const thirdDay = days[2];
      const thirdDayWeather = new Weather(
        this.cityParam,
        thirdDay.day.avgtemp_c,
        thirdDay.day.condition.text,
        currentDay.last_updated,
        thirdDay.date,
      );

      // buat 3 objects -> hari ini, besok, lusa
      this.weatherArray.push(currentWeather);
      this.weatherArray.push(secondDayWeather);
      this.weatherArray.push(thirdDayWeather);
      return this.weatherArray;
    } catch (error) {
      console.log(error.message);
    }
  }

  // reset agar array di-set kosong sblm diisi array dengan city yang baru
  resetWeather() {
    this.weatherArray = [];
  }
}
