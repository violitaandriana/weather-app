import "./styles.css";
import '@fortawesome/fontawesome-free/css/all.css';
import 'tailwindcss/tailwind.css';

// Header
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

const searchBar = document.createElement("div");
searchBar.classList.add("search-bar");
const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "Search city ..");
searchInput.classList.add("search");

dateHTML.appendChild(dateIcon);
dateHTML.appendChild(dateText);
timeHTML.appendChild(timeIcon);
timeHTML.appendChild(timeText);

dateTime.appendChild(dateHTML);
dateTime.appendChild(timeHTML);
searchBar.appendChild(searchInput);
header.appendChild(dateTime);
header.appendChild(searchBar);

document.body.appendChild(header);


// Container
const container = document.createElement("div");
container.classList.add("container");

const item = document.createElement("div");
item.classList.add("bg-item");
item.classList.add("backdrop-blur-md");
item.classList.add("bg-white/30");

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

document.body.appendChild(container);
