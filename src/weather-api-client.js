import Weather from "./weather.js";

export default class weatherAPI {
    constructor(url, key) {
        this.url = url;
        this.key = key;
        this.queryParam = "";
        this.cityParam = "";
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
            const currentWeather = new Weather(this.cityParam, currentDay.temp_c, currentDay.condition.text, currentDay.last_updated, data.location.localtime);
            
            return currentWeather;
//             fetch(this.queryParam, { mode: 'cors' })
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 const currentDay = data.current;
//                 const days = data.forecast.forecastday;
//                 // Array of Forecast Days
//                 const secondDay = days[1].day;
//                 const thirdDay = days[2].day;
// // city, temp, condition, time, last_updated
//                 const currentWeather = new Weather(this.cityParam, currentDay.temp_c, currentDay.condition.text, currentDay.last_updated);
//                 // const current = data.current;
//                 // const location = data.location;
//                 // // return object class weather -> temp, condition, localtime, last update, prediksi 2 hari setelah
//                 // // buat 3 object -> hari ini, besok, lusa
//                 // const currentWeather = new Weather(current.temp_c, current.condition.text, location.localtime, current.last_updated);
//                 // const secondwWeather = new Weather();
//                 // const thirdWeater = new Weather();
//                 // console.log(data.current.dt, data.current.timezone_offset);
//                 console.log(currentWeather)
//                 return currentWeather;
//                 // console.log(current.temp_c);
//                 // console.log(current.condition.text);
//                 // console.log(location.localtime);
//                 // console.log(current.last_updated);
//             })

        } catch (error) {
            console.log(error.message);
        }
    }
}