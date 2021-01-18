const {
	parseDate,
	shortenString,
	isTemperatureNormal,
	sortingFunctions,
} = require("./helper");

test("parse date correctly", () => {
	expect(parseDate("2021-01-18T08:00:41.533Z")).toBe("18 Jan 2021 11:00");
	expect(parseDate("2021-01-16T21:12:41.000Z")).toBe("17 Jan 2021 00:12");
});

test("shortens string with 3 dots", () => {
	expect(shortenString("Hello World", 5)).toBe("Hello...");
	expect(shortenString("Hello World", 10)).toBe("Hello Worl...");
	expect(shortenString("Hello World", 11)).toBe("Hello World");
});

test("check temperature normality", () => {
	expect(isTemperatureNormal(12, "metric")).toBe(true);
	expect(isTemperatureNormal(25, "metric")).toBe(true);
	expect(isTemperatureNormal(30, "metric")).toBe(false);
	expect(isTemperatureNormal(30, "imperial")).toBe(true);
	expect(isTemperatureNormal(77, "imperial")).toBe(true);
	expect(isTemperatureNormal(105, "imperial")).toBe(false);
});
