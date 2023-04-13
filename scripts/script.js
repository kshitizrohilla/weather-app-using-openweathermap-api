const apiKey = "b1fd6e14799699504191b6bdbcadfc35";

const unit = "metric";

var city = undefined;

function getCity()
{
    city = document.getElementById("searchCity").value

    if(city != "" && city != undefined)
    {
        console.log(city);

        getWeather();
    }

    else console.log("No City Entered");
}

async function getWeather()
{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    const response = await fetch(apiUrl);
    
    var data = await response.json();

    var cityFound = data.message;

    if(cityFound != "city not found")
    {
        console.log(data);

        getRequiredInformation();

        function getRequiredInformation()
        {
            var location = data.name;

            var temperature = data.main.temp;

            var weatherType = data.weather[0].description;

            var realFeel = data.main.feels_like;

            var windSpeed = data.wind.speed;

            var windDirection = data.wind.deg;

            var visibility = data.visibility / 1000;

            var pressure = data.main.pressure;

            var maxTemperature = data.main.temp_max;

            var minTemperature = data.main.temp_min;

            var humidity = data.main.humidity;

            var sunrise = data.sys.sunrise;

            var sunset = data.sys.sunset;

            document.getElementById("locationName").innerHTML = location;

            document.getElementById("temperatureValue").innerHTML = temperature + "<sup>o</sup>C";

            document.getElementById("weatherType").innerHTML = weatherType;
            
            document.getElementById("realFeelAdditionalValue").innerHTML = realFeel + "<sup>o</sup>C";

            document.getElementById("windSpeedAdditionalValue").innerHTML = windSpeed + " km/h";

            document.getElementById("windDirectionAdditionalValue").innerHTML = windDirection;

            document.getElementById("visibilityAdditionalValue").innerHTML = visibility + " km";

            document.getElementById("pressureAdditionalValue").innerHTML = pressure;

            document.getElementById("maxTemperatureAdditionalValue").innerHTML = maxTemperature + "<sup>o</sup>C";

            document.getElementById("minTemperatureAdditionalValue").innerHTML = minTemperature + "<sup>o</sup>C";

            document.getElementById("humidityAdditionalValue").innerHTML = humidity;

            document.getElementById("sunriseAdditionalValue").innerHTML = sunrise;

            document.getElementById("sunsetAdditionalValue").innerHTML = sunset;
        }
    }

    else console.log("City Not Found");
}