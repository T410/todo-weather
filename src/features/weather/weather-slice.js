import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		data: {
			degree: null,
			icon: null,
			city: null,
		},
		coords: {
			lat: null,
			lng: null,
		},
		units: "metric",
	},
	reducers: {
		update: (state, action) => {
			state.data = action.payload;
		},
		updateCoords: (state, action) => {
			state.coords = action.payload;
		},
		changeUnits: (state, action) => {
			state.units = action.payload;
		},
	},
});

export const { update, updateCoords, changeUnits } = weatherSlice.actions;

export const selectData = (state) => {
	return state.weather.data;
};

export const selectUnits = (state) => {
	return state.weather.units;
};

export default weatherSlice.reducer;
