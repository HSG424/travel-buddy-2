import { ACCUWEATHER_ICONS } from "../config.js";

const degreeSymbol = String.fromCharCode(176);

const temperature = (temperature, selectedSystem) => {
  return `${temperature[selectedSystem].Value} ${degreeSymbol}${temperature[selectedSystem].Unit}`;
};

export const weatherLocationStr = (locationData) => {
  return `${locationData.EnglishName}, ${locationData.AdministrativeArea.EnglishName} - ${locationData.Country.EnglishName}`;
};

export const weatherConditionsList = (weatherData, selectedSystem) => {
  return [
    `Temperature: ${temperature(weatherData.Temperature, selectedSystem)}`,
    `Feels Like: ${weatherData.RealFeelTemperature[selectedSystem].Value} ${degreeSymbol}${weatherData.RealFeelTemperature[selectedSystem].Unit}`,
    `Shade Temp: ${weatherData.RealFeelTemperatureShade[selectedSystem].Value} ${degreeSymbol}${weatherData.RealFeelTemperatureShade[selectedSystem].Unit}`,
    `24-hour High / Low: ${weatherData.TemperatureSummary.Past24HourRange.Maximum[selectedSystem].Value} ${degreeSymbol}${weatherData.TemperatureSummary.Past24HourRange.Maximum[selectedSystem].Unit} / ${weatherData.TemperatureSummary.Past24HourRange.Minimum[selectedSystem].Value} ${degreeSymbol}${weatherData.TemperatureSummary.Past24HourRange.Minimum[selectedSystem].Unit}`,
    `Relative Humidity: ${weatherData.RelativeHumidity}%`,
    `Wind: ${weatherData.Wind.Speed[selectedSystem].Value} ${weatherData.Wind.Speed[selectedSystem].Unit}`,
    `UV Index: ${weatherData.UVIndex} (${weatherData.UVIndexText})`,
    `Visibility: ${weatherData.Visibility[selectedSystem].Value} ${weatherData.Visibility[selectedSystem].Unit}`,
    `Precipitation (1 hour): ${weatherData.PrecipitationSummary.PastHour[selectedSystem].Value} ${weatherData.PrecipitationSummary.PastHour[selectedSystem].Unit}`,
    `Precipitation (24 hours): ${weatherData.PrecipitationSummary.Past24Hours[selectedSystem].Value} ${weatherData.PrecipitationSummary.Past24Hours[selectedSystem].Unit}`,
    `Last Update: ${new Date(weatherData.EpochTime * 1000).toLocaleString()}`,
  ];
};

export const weatherDescription = (text, temp, selectedSystem) => {
  return `${temperature(temp, selectedSystem)}: "${text}"`;
};

export const weatherIcon = (icon) => {
  return `${ACCUWEATHER_ICONS}${("0" + icon).slice(-2)}-s.png`;
};
