import "./styles.css";
import '@fortawesome/fontawesome-free/css/all.css';
import 'tailwindcss/tailwind.css';
import weatherAPI from './weather-api-client.js';
import { container } from "webpack";

// DOM 
// Header - Date & Time
const header = document.createElement("header");
header.classList.add("header");
const dateTime = document.createElement("div");
dateTime.classList.add("date-time");
const dateHeader = document.createElement("div");
dateHeader.classList.add("date");
const dateIcon = document.createElement("i");
dateIcon.classList.add('fa-regular');
dateIcon.classList.add('fa-calendar');
const dateText = document.createElement("span");

const timeHeader = document.createElement("div");
timeHeader.classList.add("time");
const timeIcon = document.createElement("i");
timeIcon.classList.add('fa-regular');
timeIcon.classList.add('fa-clock');
const timeText = document.createElement("span");

// Header - Search Form
const searchContainer = document.createElement("div");
searchContainer.classList.add("search-bar");

const searchForm = document.createElement("form");
searchForm.setAttribute("name", "search-form");
searchForm.setAttribute("class", "search-form");
searchForm.setAttribute("action", "#");

const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("name", "input-value");
searchInput.setAttribute("placeholder", "Search city ..");
searchInput.classList.add("search");

const searchBtn = document.createElement("button");
searchBtn.setAttribute("type", "submit");
searchBtn.classList.add("search-btn");

dateHeader.appendChild(dateIcon);
dateHeader.appendChild(dateText);
timeHeader.appendChild(timeIcon);
timeHeader.appendChild(timeText);

dateTime.appendChild(dateHeader);
dateTime.appendChild(timeHeader);
searchForm.appendChild(searchInput);
searchForm.appendChild(searchBtn);
searchContainer.appendChild(searchForm);
header.appendChild(dateTime);
header.appendChild(searchContainer);

document.body.appendChild(header);

// Initialization
const weatherClient = new weatherAPI('https://api.weatherapi.com/v1', '169419ecb1b94c6cb8c154412232908');

// Default weather = Jakarta
async function initializeWeather() {
    const defaultWeather = await weatherClient.city('jakarta').getWeather();
    displayWeather(defaultWeather);
}

// Search city's weather
searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const city = searchForm.elements["input-value"].value;
    const weatherObject = await getWeatherObject(city);
    displayWeather(weatherObject);
});

async function getWeatherObject(city) {
    // return array of objects karena ada 3 days
    const weatherObj = await weatherClient.city(city).getWeather();
    return weatherObj;
}

function displayWeather(weather) {
    // Header - date & time
    dateText.textContent = weather.getLocalTimeDate();
    timeText.textContent = weather.getLocalTimeHour();

    // Container Weather
    const container = document.createElement("div");
    container.classList.add("container");

    // loop 3 days
    // resetWeather(container);
    const item = document.createElement("div");
    item.classList.add("item");
    item.classList.add("bg-item");
    const day = document.createElement("span");
    day.classList.add("day");

    const temp = document.createElement("div");
    temp.classList.add("temp");
    const tempNum = document.createElement("span");
    tempNum.classList.add("temp-num");
    const tempCelcius = document.createElement("span");
    tempCelcius.classList.add("temp-celcius");
    tempCelcius.textContent = '°C';

    const city = document.createElement("div");
    city.classList.add("city");

    const weatherHTML = document.createElement("div");
    weatherHTML.classList.add("weather");
    const weatherIcon = document.createElement("i");
    weatherIcon.classList.add('fa-solid');
    weatherIcon.classList.add('fa-cloud-rain');
    const weatherCondition = document.createElement("span");

    const lastUpdated = document.createElement("div");
    lastUpdated.classList.add("last-updated");
    const lastIcon = document.createElement("i");
    lastIcon.classList.add('fa-solid');
    lastIcon.classList.add('fa-clock');
    const lastText = document.createElement("span");

    
    day.textContent = weather.getLocalTimeDay();
    city.textContent = weather.getCity();
    tempNum.textContent = weather.getTemp();

    // weather icon if else

    weatherCondition.textContent = weather.getCondition();
    lastText.textContent = weather.getLastUpdated();


    temp.appendChild(tempNum)
    temp.appendChild(tempCelcius)
    weatherHTML.appendChild(weatherIcon);
    weatherHTML.appendChild(weatherCondition);
    lastUpdated.appendChild(lastIcon);
    lastUpdated.appendChild(lastText);
    weatherHTML.appendChild(lastUpdated);

    item.appendChild(day);
    item.appendChild(temp);
    item.appendChild(city);
    item.appendChild(weatherHTML);
    container.appendChild(item);

    document.body.appendChild(container);
}

// function resetWeather(container) {
//     container.textContent = '';
// }

// Main
initializeWeather();