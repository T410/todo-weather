import React from "react";
import logo from "./logo.svg";
import ServiceAvailability from "./features/service-availability/ServiceAvailability.js";
import "./App.css";

import TodoContainer from "./features/todo/TodoContainer";
import WeatherContainer from "./features/weather/WeatherContainer";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<ServiceAvailability />
			</header>
			<div className="App-content">
				<TodoContainer />
				<WeatherContainer />
			</div>
		</div>
	);
}

export default App;
