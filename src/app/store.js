import { configureStore } from "@reduxjs/toolkit";
import serviceAvailabilityReducer from "../features/service-availability/service-availability-slice.js";
import todoReducer from "../features/todo/todo-slice";
import weatherReducer from "../features/weather/weather-slice";

export default configureStore({
	reducer: {
		serviceAvailability: serviceAvailabilityReducer,
		todo: todoReducer,
		weather: weatherReducer,
	},
});
