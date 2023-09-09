export default class weatherAPI {
    constructor(url, key) {
        this.url = url;
        this.key = key;
        this.typeParam = "";
        this.queryParam = "";
        this.cityParam = "";
    }

    // builder function
    buildQuery() {
        // cons - lack missing param validation
        this.queryParam = `${this.url}/${this.typeParam}?key=${this.key}&q=${this.cityParam}`;
        return this;
    }

    type(typeJSON) {
        this.typeParam = typeJSON;
        return this;
    }

    city(cityParam) {
        this.cityParam = cityParam;
        return this;
    }

    // executor function
    getWeather() {
        this.buildQuery();
        fetch(this.queryParam, { mode: 'cors' })
            .then(response => {
                return response.json();
            })
            .then(data => {
                const current = data.current;
                const location = data.location;
                // return object class weather;
                console.log(current.temp_c);
                console.log(current.condition.text);
                console.log(location.localtime);
                console.log(current.last_updated);
            })
            .catch(error => {
                console.log(error.message);
            });
    }
}