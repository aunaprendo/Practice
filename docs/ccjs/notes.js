

You will use a weather API. The output data has the following format:

{
  "weather": [
    {
      "main": "Clear",
      "description": "clear sky",
      "icon": "https://cdn.freecodecamp.org/weather-icons/01n.png" // icon representing the weather
    }
  ],
  "main": {
    "temp": 2.62, // temperature in C
    "feels_like": 0.84, // temperature in C
    "temp_min": 1.72, // min temperature of the day in C
    "temp_max": 3.49, // max temperature of the day in C
    "pressure": 1010, // atmospheric pressure in hPa
    "humidity": 81 // humidity in %
  },
  "visibility": 10000, // distance in meters
  "wind": {
    "speed": 1.79, // speed of the wind in m/s
    "deg": 285, // orientation of the wind in degrees
    "gust": 3.13 // gust speed in m/s
  },
  "name": "London"
}

You should have a button element with an id of get-weather-btn.
You should have a select element with seven option elements nested within it. The first option should have an empty string as its text and value attribute. The rest should have the following for their text and values (with the value being lowercase):

New York
Los Angeles
Chicago
Paris
Tokyo
London
If no city is selected, pressing the button should do nothing.
If a city is selected, elements to show the weather should appear:

You should have an img element with the id weather-icon for displaying the weather icon.
You should have an element with the id main-temperature for displaying the main temperature.
You should have an element with the id feels-like for displaying what the temperature feels like.
You should have an element with the id humidity for displaying the amount of humidity in air.
You should have an element with the id wind for displaying the wind speed.
You should have an element with the id wind-gust for displaying the wind gust.
You should have an element with the id weather-main for displaying the main weather type.
You should have an element with the id location for displaying the current location.
You should have an asynchronous function named getWeather that fetches the weather information from the https://weather-proxy.freecodecamp.rocks/api/city/<CITY> API and returns it. Note that this API returns data using the metric system, that means m/s for wind speed, and Celsius for the temperature.
The getWeather asynchronous function should accept a city as its argument.
You should handle any errors that occur within the getWeather function and log them to the console.
You should have an asynchronous showWeather function that accepts a city as parameter.
The showWeather function should call the getWeather function to retrieve the weather data for the selected city from the dropdown.
If the getWeather function had an error, the app should only show an alert that says Something went wrong, please try again later.
If the data from getWeather are usable, the showWeather function should display the weather data in the corresponding elements. If a certain value from the API is undefined, you should write N/A in the corresponding element.
NOTE: The tests will take time to complete. As long as you see // running tests in the console, they are being executed