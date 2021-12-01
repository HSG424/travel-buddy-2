const htmlDegrees = String.fromCharCode(176);

export const weatherConditionsFormat = (weatherData) => {
  return [
    `Temperature: ${weatherData.Temperature["Metric"].Value} ${htmlDegrees}${weatherData.Temperature["Metric"].Unit}`,
    `Feels Like: ${weatherData.RealFeelTemperature["Metric"].Value} ${htmlDegrees}${weatherData.RealFeelTemperature["Metric"].Unit}`,
    `Shade Temp: ${weatherData.RealFeelTemperatureShade["Metric"].Value} ${htmlDegrees}${weatherData.RealFeelTemperatureShade["Metric"].Unit}`,
    `24-hour High / Low: ${weatherData.TemperatureSummary.Past24HourRange.Maximum["Metric"].Value} ${htmlDegrees}${weatherData.TemperatureSummary.Past24HourRange.Maximum["Metric"].Unit} / ${weatherData.TemperatureSummary.Past24HourRange.Minimum["Metric"].Value} ${htmlDegrees}${weatherData.TemperatureSummary.Past24HourRange.Minimum["Metric"].Unit}`,
    `Relative Humidity: ${weatherData.RelativeHumidity}%`,
    `Wind: ${weatherData.Wind.Speed["Metric"].Value} ${weatherData.Wind.Speed["Metric"].Unit}`,
    `UV Index: ${weatherData.UVIndex} (${weatherData.UVIndexText})`,
    `Visibility: ${weatherData.Visibility["Metric"].Value} ${weatherData.Visibility["Metric"].Unit}`,
    `Precipitation (1 hour): ${weatherData.PrecipitationSummary.PastHour["Metric"].Value} ${weatherData.PrecipitationSummary.PastHour["Metric"].Unit}`,
    `Precipitation (24 hours): ${weatherData.PrecipitationSummary.Past24Hours["Metric"].Value} ${weatherData.PrecipitationSummary.Past24Hours["Metric"].Unit}`,
    //`Latitude: `,
    //`Longitude: `,
    `Last Update: ${new Date(weatherData.EpochTime * 1000).toLocaleString()}`,
  ];
};
