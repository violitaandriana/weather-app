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

      const currentDay = data.current;
      const currentWeather = new Weather(
        this.cityParam,
        currentDay.temp_c,
        currentDay.condition.text,
        currentDay.last_updated,
        data.location.localtime,
      );

      const days = data.forecast.forecastday;
      // Array of Forecast Days
      const secondDay = days[1];
      const secondDayWeather = new Weather(
        this.cityParam,
        secondDay.day.avgtemp_c,
        secondDay.day.condition.text,
        currentDay.last_updated,
        secondDay.date,
      );


      const thirdDay = days[2];
      const thirdDayWeather = new Weather(
        this.cityParam,
        thirdDay.day.avgtemp_c,
        thirdDay.day.condition.text,
        currentDay.last_updated,
        thirdDay.date,
      );

      // return object class weather -> temp, condition, localtime, last update, prediksi 2 hari setelah
      // buat 3 object -> hari ini, besok, lusa
      this.weatherArray.push(currentWeather);
      this.weatherArray.push(secondDayWeather);
      this.weatherArray.push(thirdDayWeather);


      return this.weatherArray;
    } catch (error) {
      console.log(error.message);
    }
  }
}
