//your JS code here. If required.
const getCurrentWeather = () => {
			const url =
				"https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5c01fc9ace9d2ca46d9af2d700bf7db4";

			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					const weatherData = document.getElementById("weatherData");
					weatherData.textContent = `Current weather in London: ${data.weather[0].main}`;
				})
				.catch((error) => console.error(error));
		};