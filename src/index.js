import "./styles.css";
import '@fortawesome/fontawesome-free/css/all.css';
import 'tailwindcss/tailwind.css';

const testBtn = document.createElement('button');
testBtn.textContent = 'API Data';
testBtn.addEventListener('click', () => {
    getCurrentDataAPI()
    getForecastDataAPI()
});
// JSON
function getCurrentDataAPI() {
    fetch('https://api.weatherapi.com/v1/current.json?key=169419ecb1b94c6cb8c154412232908&q=paris', { mode: 'cors' })
        .then(response => {
            return response.json();
        })
        .then(data => {
            const current = data.current;
            const location = data.location;
            console.log(current.temp_c);
            console.log(current.condition.text);
            console.log(location.localtime);
        })
        .catch(error => {
            console.log(error);
        });
}

function getForecastDataAPI() {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=169419ecb1b94c6cb8c154412232908&q=paris', { mode: 'cors' })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            // const current = data.current;
            // const location = data.location;
            // console.log(current.temp_c);
            // console.log(current.condition.text);
            // console.log(location.localtime);
        })
        .catch(error => {
            console.log(error);
        });
}


// Header - time
const header = document.createElement("header");
header.classList.add("header");
const dateTime = document.createElement("div");
dateTime.classList.add("date-time");
const dateHTML = document.createElement("div");
dateHTML.classList.add("date");
const dateIcon = document.createElement("i");
dateIcon.classList.add('fa-regular');
dateIcon.classList.add('fa-calendar');
const dateText = document.createElement("span");
dateText.textContent = ' Friday, 30/12/2020';

const timeHTML = document.createElement("div");
timeHTML.classList.add("time");
const timeIcon = document.createElement("i");
timeIcon.classList.add('fa-regular');
timeIcon.classList.add('fa-clock');
const timeText = document.createElement("span");
timeText.textContent = ' 09.00 AM';

// search form
const searchForm = document.createElement("form");
searchForm.setAttribute("name", "search-form");
searchForm.setAttribute("class", "search-form");
searchForm.setAttribute("action", "#");
// searchForm.setAttribute("onsubmit", "renderWeather();return false");

const searchBar = document.createElement("div");
searchBar.classList.add("search-bar");

const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("name", "input-value");
searchInput.setAttribute("placeholder", "Search city ..");
searchInput.classList.add("search");

const searchBtn = document.createElement("button");
searchBtn.setAttribute("type", "submit");
searchBtn.classList.add("search-btn");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
})

dateHTML.appendChild(dateIcon);
dateHTML.appendChild(dateText);
timeHTML.appendChild(timeIcon);
timeHTML.appendChild(timeText);

dateTime.appendChild(dateHTML);
dateTime.appendChild(timeHTML);
searchForm.appendChild(searchInput);
searchForm.appendChild(searchBtn);
searchBar.appendChild(searchForm);
header.appendChild(dateTime);
header.appendChild(searchBar);

document.body.appendChild(header);


// Container
const container = document.createElement("div");
container.classList.add("container");

const item = document.createElement("div");
item.classList.add("item");
item.classList.add("bg-item");
const day = document.createElement("span");
day.classList.add("day");
day.textContent = 'Friday';

const temp = document.createElement("div");
temp.classList.add("temp");
const tempNum = document.createElement("span");
tempNum.classList.add("temp-num");
tempNum.textContent = '22';
const tempCelcius = document.createElement("span");
tempCelcius.classList.add("temp-celcius");
tempCelcius.textContent = '°C';

const city = document.createElement("div");
city.classList.add("city");
city.textContent = 'Paris, France';

const weather = document.createElement("div");
weather.classList.add("weather");
const weatherIcon = document.createElement("i");
weatherIcon.classList.add('fa-solid');
weatherIcon.classList.add('fa-cloud-rain');
const weatherText = document.createElement("span");
weatherText.textContent = ' Moderate rain';

temp.appendChild(tempNum)
temp.appendChild(tempCelcius)
weather.appendChild(weatherIcon);
weather.appendChild(weatherText);

item.appendChild(day);
item.appendChild(temp);
item.appendChild(city);
item.appendChild(weather);
container.appendChild(item);

// button test
document.body.appendChild(testBtn);
document.body.appendChild(container);
