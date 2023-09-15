import { format } from 'date-fns';

export default class Weather {
  constructor(city, temp, condition, last_updated, local_time) {
    this.city = city;
    this.temp = temp;
    this.condition = condition;
    this.last_updated = last_updated;
    this.local_time = local_time;
  }

  getCity() {
    return this.city.charAt(0).toUpperCase() + this.city.slice(1);
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
