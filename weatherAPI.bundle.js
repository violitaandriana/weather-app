"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["weatherAPI"],{

/***/ "./src/weather-api-client.js":
/*!***********************************!*\
  !*** ./src/weather-api-client.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherAPI)
/* harmony export */ });
class weatherAPI {
    constructor(url, key) {
        this.url = url;
        this.key = key;
        this.typeParam = "";
        this.query = "";
        this.cityParam = "";
    }

    query() {
        this.query = `${this.url}/${this.typeParam}?key=${$this.key}&q=${cityParam}`;
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

    getWeather(city) {
        fetch(this.query, { mode: 'cors' })
            .then(response => {
                return response.json();
            })
            .then(data => {
                const current = data.current;
                const location = data.location;
                console.log(current.temp_c);
                console.log(current.condition.text);
                console.log(location.localtime);
                console.log(current.last_updated);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/weather-api-client.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckFQSS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsU0FBUyxHQUFHLGVBQWUsT0FBTyxVQUFVLEtBQUssVUFBVTtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWFwaS1jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd2VhdGhlckFQSSB7XG4gICAgY29uc3RydWN0b3IodXJsLCBrZXkpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnR5cGVQYXJhbSA9IFwiXCI7XG4gICAgICAgIHRoaXMucXVlcnkgPSBcIlwiO1xuICAgICAgICB0aGlzLmNpdHlQYXJhbSA9IFwiXCI7XG4gICAgfVxuXG4gICAgcXVlcnkoKSB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBgJHt0aGlzLnVybH0vJHt0aGlzLnR5cGVQYXJhbX0/a2V5PSR7JHRoaXMua2V5fSZxPSR7Y2l0eVBhcmFtfWA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHR5cGUodHlwZUpTT04pIHtcbiAgICAgICAgdGhpcy50eXBlUGFyYW0gPSB0eXBlSlNPTjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2l0eShjaXR5UGFyYW0pIHtcbiAgICAgICAgdGhpcy5jaXR5UGFyYW0gPSBjaXR5UGFyYW07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFdlYXRoZXIoY2l0eSkge1xuICAgICAgICBmZXRjaCh0aGlzLnF1ZXJ5LCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGRhdGEuY3VycmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRhdGEubG9jYXRpb247XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudC50ZW1wX2MpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQuY29uZGl0aW9uLnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uLmxvY2FsdGltZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudC5sYXN0X3VwZGF0ZWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==