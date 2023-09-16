import './styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'tailwindcss/tailwind.css';
import weatherAPI from './weather-api-client.js';

// Initialization
const weatherClient = new weatherAPI(
    'https://api.weatherapi.com/v1',
    '169419ecb1b94c6cb8c154412232908',
);

// Default weather = Jakarta
async function initializeWeather() {
    const defaultWeather = await weatherClient.city('jakarta').getWeather();
    displayWeather(defaultWeather);
}

async function getWeatherObject(city) {
    // return array of objects karena ada 3 days 
    const weatherObj = await weatherClient.city(city).getWeather();
    return weatherObj;
}

function resetWeatherDisplay() {
    container.textContent = '';
}

// DOM
// Header - Date & Time
const header = document.createElement('header');
header.classList.add('header');
const dateTime = document.createElement('div');
dateTime.classList.add('date-time');
const dateHeader = document.createElement('div');
dateHeader.classList.add('date');
const dateIcon = document.createElement('i');
dateIcon.classList.add('fa-regular');
dateIcon.classList.add('fa-calendar');
const dateText = document.createElement('span');

const timeHeader = document.createElement('div');
timeHeader.classList.add('time');
const timeIcon = document.createElement('i');
timeIcon.classList.add('fa-regular');
timeIcon.classList.add('fa-clock');
const timeText = document.createElement('span');

// Header - Search Form
const searchContainer = document.createElement('div');
searchContainer.classList.add('search-bar');

const searchForm = document.createElement('form');
searchForm.setAttribute('name', 'search-form');
searchForm.setAttribute('class', 'search-form');
searchForm.setAttribute('action', '#');

const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('name', 'input-value');
searchInput.setAttribute('placeholder', 'Search city ..');
searchInput.classList.add('search');

const searchBtn = document.createElement('button');
searchBtn.setAttribute('type', 'submit');
searchBtn.classList.add('search-btn');

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

// If user enter city
searchForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const city = searchForm.elements['input-value'].value;
    const weatherObject = await getWeatherObject(city);
    displayWeather(weatherObject);
});

// Container Weather
const container = document.createElement('div');
container.classList.add('container');

function displayWeather(weatherArray) {
    console.log(weatherArray)
    resetWeatherDisplay();

    // Header - date & time
    dateText.textContent = weatherArray[0].getLocalTimeDate();
    timeText.textContent = weatherArray[0].getLocalTimeHour();

    // weatherArray[0] = current day, [1] & [2] = forecast days
    // loop 3 days 
    weatherArray.forEach(weather => {
        const item = document.createElement('div');
        item.classList.add('item');
        item.classList.add('bg-item');
        const day = document.createElement('span');
        day.classList.add('day');

        const temp = document.createElement('div');
        temp.classList.add('temp');
        const tempNum = document.createElement('span');
        tempNum.classList.add('temp-num');
        const tempCelcius = document.createElement('span');
        tempCelcius.classList.add('temp-celcius');
        tempCelcius.textContent = '°C';

        const city = document.createElement('div');
        city.classList.add('city');

        const weatherHTML = document.createElement('div');
        weatherHTML.classList.add('weather');
        const weatherIcon = document.createElement('i');
        weatherIcon.classList.add('fa-solid');
        const weatherCondition = document.createElement('span');

        const lastUpdated = document.createElement('div');
        lastUpdated.classList.add('last-updated');
        const lastIcon = document.createElement('i');
        lastIcon.classList.add('fa-solid');
        lastIcon.classList.add('fa-clock');
        const lastText = document.createElement('span');

        // Get data from object
        day.textContent = weather.getLocalTimeDay();
        city.textContent = weather.getCity();
        tempNum.textContent = weather.getTemp();
        weatherCondition.textContent = weather.getCondition();
        const cuaca = weatherCondition.textContent.toLowerCase();
        switch (true) {
            case cuaca.includes('cloud') || cuaca.includes('overcast'):
                weatherIcon.classList.add('fa-cloud');
                break;
            case cuaca.includes('sunny') || cuaca.includes('clear'):
                weatherIcon.classList.add('fa-sun');
                break;
            case cuaca.includes('rain') || cuaca.includes('drizzle'):
                weatherIcon.classList.add('fa-cloud-rain');
                break;
            case cuaca.includes('snow') || cuaca.includes('blizzard'):
                weatherIcon.classList.add('fa-snowflake');
                break;
            case cuaca.includes('thunder'):
                weatherIcon.classList.add('fa-cloud-bolt');
                break;
            default:
                weatherIcon.classList.add('fa-smog');
                break;
        }
        lastText.textContent = weather.getLastUpdated();

        temp.appendChild(tempNum);
        temp.appendChild(tempCelcius);
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
    });
    document.body.appendChild(container);
    weatherClient.resetWeather();
}


// Main
initializeWeather();
