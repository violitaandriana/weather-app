import { format } from 'date-fns';

export default class Forecast {
  // create a new current weather obj from param
  // param:
  // city = current weather city
  // jsonForecastData = weather API json response for a particular forecast day data (data.forecast.forecastday) by array, e.g.: data.forecast.forecastday[1]
  constructor(city, jsonForecastData) {
    this.city = city;
    this.temp = jsonForecastData.day.avgtemp_c;
    this.condition = jsonForecastData.day.condition.text;
    this.local_time = jsonForecastData.date;

    return this;
  }

  // Capitalize the first char
  getCity() {
    return this.city.charAt(0).toUpperCase() + this.city.slice(1);
  }

  getTemp() {
    return this.temp;
  }

  getCondition() {
    return this.condition;
  }

  getLocalTimeDate() {
    return format(new Date(this.local_time), 'EEEE, dd MMM yyyy');
  }

  getLocalTimeHour() {
    return format(new Date(this.local_time), 'HH:mm');
  }

  getLocalTimeDay() {
    return format(new Date(this.local_time), 'EEEE');
  }
}
