import { update, updateCoords, changeUnits } from "./weather-slice.js";
import store from "../../app/store";

export function checkWeather() {
	const { lat, lon } = store.getState().weather.coords,
		units = store.getState().weather.units;

	fetch(
		"http://api.openweathermap.org/data/2.5/weather?" +
			new URLSearchParams({
				lat,
				lon,
				appid: process.env.REACT_APP_API_KEY,
				units,
			})
	)
		.then((res) => res.json())
		.then((data) => {
			if (Number(data.cod) === 200) {
				store.dispatch(
					update({
						degree: data.main.temp,
						icon: data.weather[0]?.icon,
						city: data.name,
					})
				);
			}
		})
		.catch((error) => {
			console.log(error);
		});
}

export function checkCoords() {
	if ("geolocation" in navigator) {
		let lat, lon;
		navigator.geolocation.getCurrentPosition(function (position) {
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			store.dispatch(
				updateCoords({
					lat,
					lon,
				})
			);
			checkWeather(store);
		});
	} else {
		console.log("Not Available");
	}
}

export function changeTemperatureUnits(units, dispatch) {
	dispatch(changeUnits(units));
	dispatch(checkWeather);
}
