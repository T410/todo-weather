import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.js";
import store from "./app/store.js";
import * as serviceWorker from "./serviceWorker.js";
import startAvailabilityChecks from "./features/service-availability/service-availability-check.js";
import { checkCoords } from "./features/weather/weather-actions";
import { listTodos } from "./features/todo/todo-actions";

checkCoords();
startAvailabilityChecks(store);
listTodos(store);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
