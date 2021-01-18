import { months, temperatureTypes } from "./enums";
export const parseDate = (date) => {
	const _date = new Date(date),
		year = _date.getFullYear(),
		month = months[_date.getMonth()],
		day = _date.getDate(),
		hours = _date.getHours().toString(),
		minutes = _date.getMinutes().toString();

	return `${day} ${month} ${year} ${hours.length === 1 ? "0" : ""}${hours}:${
		minutes.length === 1 ? "0" : ""
	}${minutes}`;
};

export const shortenString = (str, charCount) => {
	return str.length > charCount ? str.slice(0, charCount) + "..." : str;
};

export const isTemperatureNormal = (degree, type) => {
	if (type === temperatureTypes.metric.name) {
		return degree <= 25;
	} else {
		return degree <= 77;
	}
};

export const sortingFunctions = {
	new_updated_first: function (a, b) {
		if (a.updatedAt < b.updatedAt) {
			return 1;
		} else if (a.updatedAt === b.updatedAt) {
			return 0;
		}
		return -1;
	},
	old_updated_first: function (a, b) {
		if (a.updatedAt < b.updatedAt) {
			return -1;
		} else if (a.updatedAt === b.updatedAt) {
			return 0;
		}
		return 1;
	},
	new_created_first: function (a, b) {
		if (a.createdAt < b.createdAt) {
			return 1;
		} else if (a.createdAt === b.createdAt) {
			return 0;
		}
		return -1;
	},
	old_created_first: function (a, b) {
		if (a.createdAt < b.createdAt) {
			return -1;
		} else if (a.createdAt === b.createdAt) {
			return 0;
		}
		return 1;
	},
	priority_ascending: function (a, b) {
		return a.priority - b.priority;
	},
	priority_descending: function (a, b) {
		return b.priority - a.priority;
	},
};
