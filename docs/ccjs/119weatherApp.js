const getWeatherBtn = document.getElementById('get-weather-btn');
const citySelection = document.getElementById('city-select');
const weatherContainer = document.getElementById('weather-container');

const icon = document.getElementById('weather-icon');
const locationCity = document.getElementById('location');
const mainTemp = document.getElementById('main-temperature');
const feelsLike = document.getElementById('feels-like');
const humidityLevel = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const gust = document.getElementById('wind-gust');
const weatherType = document.getElementById('weather-main');
			
let cityName = "";

function selectCity() {
	if (citySelection.value !== "") {
		weatherContainer.classList.remove("WAhidden");
		cityName = citySelection.value;
	}
}
getWeatherBtn.addEventListener("click", () => {
  selectCity();
  if (cityName) {
    showWeather(cityName);
  }
});

function populateInfo(data) {
  const { weather, main, visibility, wind, name } = data;

  mainTemp.innerText = `Temperature: ${main?.temp ?? "N/A"}`;
	feelsLike.innerText = `Feels Like: ${main?.feels_like ?? "N/A"}`;
	humidityLevel.innerText = `Humidity: ${main?.humidity ?? "N/A"}`;
	
	const iconUrl = weather?.[0]?.icon;
	icon.src = iconUrl || "";
	weatherType.innerText = `Type: ${weather?.[0]?.main ?? "N/A"}`;
	
	locationCity.innerText = name;
	
	windEl.innerText = `Wind: ${wind?.speed ?? "N/A"}`;
	gust.innerText = `Gust: ${wind?.gust ?? "N/A"}`;
}

async function getWeather(city) {
  try {
    const response = await fetch(`//weather-proxy.freecodecamp.rocks/api/city/${city}`);

    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    return await response.json();

  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function showWeather(city) {
  try {
    const data = await getWeather(city);
    populateInfo(data);
  } catch (err) {
    alert("Something went wrong, please try again later");
  }
}