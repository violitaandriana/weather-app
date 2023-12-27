import { format } from 'date-fns';

export default class Weather {
  // create a new current weather obj from param
  // param:
  // city = current weather city
  // jsonResponseData = weather API json response
  constructor(city, jsonResponseData) {
    const currentDay = jsonResponseData.current;
    this.city = city;
    this.temp = currentDay.temp_c;
    this.condition = currentDay.condition.text;
    this.last_updated = currentDay.last_updated;
    this.local_time = jsonResponseData.location.localtime;

    return this;
  }

  // Change into title case
  getCity() {
    return this.city.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }

  getTemp() {
    return this.temp;
  }

  getCondition() {
    return this.condition;
  }

  getLastUpdated() {
    return format(new Date(this.last_updated), 'HH:mm');
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
