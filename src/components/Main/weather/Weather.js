import { useEffect, useState, useCallback } from "react";
import classes from "./Weather.module.scss";
import Geolocation from "../../../helpers/Geolocation";
import useHttp from "../../../hooks/use-accuweather-mock-data";
//import useHttp from "../../hooks/use-http";
import {
  WEATHER_STR,
  ACCUWEATHER_API,
  ACCUWEATHER_KEY,
  IMPERIAL_STR,
} from "../../../config.js";
import {
  weatherLocationStr,
  weatherConditionsList,
  weatherDescription,
  weatherIcon,
} from "../../../helpers/weather";
import Error from "./Error";
import Loading from "../Loading";
import WeatherConditions from "./WeatherConditions";

const Weather = (props) => {
  const [selectedSystem, setSelectedSystem] = useState(IMPERIAL_STR);

  const [weatherData, setWeatherData] = useState({});

  const [weatherLocation, setWeatherLocation] = useState("");

  const [weatherConditions, setWeatherConditions] = useState({
    weatherDescription: "",
    weatherIcon: "",
    weatherConditions: [],
  });

  const [error, setError] = useState(null);

  const {
    isLoading: loadingLocation,
    error: errorLocation,
    sendRequest: fetchWeatherLocation,
  } = useHttp();

  const {
    isLoading: loadingConditions,
    error: errorConditions,
    sendRequest: fetchWeatherConditions,
  } = useHttp();

  const processWeatherConditions = useCallback(
    ([weatherData]) => {
      setWeatherData(weatherData);
      setWeatherConditions({
        weatherDescription: weatherDescription(
          weatherData.WeatherText,
          weatherData.Temperature,
          selectedSystem
        ),
        weatherIcon: weatherIcon(weatherData.WeatherIcon),
        weatherConditions: weatherConditionsList(weatherData, selectedSystem),
      });
    },
    [selectedSystem]
  );

  const processWeatherLocation = useCallback(
    (locationData) => {
      setWeatherLocation(weatherLocationStr(locationData));

      fetchWeatherConditions(
        {
          url: `${ACCUWEATHER_API}currentconditions/v1/${locationData.Key}?apikey=${ACCUWEATHER_KEY}&details=true `,
        },
        processWeatherConditions
      );
    },
    [fetchWeatherConditions, processWeatherConditions]
  );

  const locationWeatherHandler = useCallback(async () => {
    try {
      const location = new Geolocation();
      await location.latitudeLongitude();

      fetchWeatherLocation(
        {
          url: `${ACCUWEATHER_API}locations/v1/cities/geoposition/search?apikey=${ACCUWEATHER_KEY}&q=${location.latitude}%2C${location.longitude}`,
        },
        processWeatherLocation
      );
    } catch (err) {
      setError(err || "Something went wrong!");
    }
  }, [fetchWeatherLocation, processWeatherLocation]);

  const dataNotRetrieved = Object.keys(weatherData).length === 0;

  useEffect(() => {
    dataNotRetrieved && locationWeatherHandler();
  }, [locationWeatherHandler, dataNotRetrieved]);

  const changeSystemHandler = (event) => {
    const { value: newSystem } = event.target;

    setSelectedSystem(newSystem);

    setWeatherConditions({
      ...weatherConditions,
      weatherDescription: weatherDescription(
        weatherData.WeatherText,
        weatherData.Temperature,
        newSystem
      ),
      weatherConditions: weatherConditionsList(weatherData, newSystem),
    });
  };

  const errorMsg = error || errorLocation || errorConditions || "";

  let content = "";

  if (errorMsg) {
    content = (
      <Error errorMsg={errorMsg} onLocationWeather={locationWeatherHandler} />
    );
  }

  if (loadingLocation || loadingConditions) {
    content = <Loading type={WEATHER_STR} />;
  }

  if (!dataNotRetrieved) {
    content = (
      <WeatherConditions
        weatherConditions={weatherConditions}
        weatherLocation={weatherLocation}
        selectedSystem={selectedSystem}
        onChangeSystem={changeSystemHandler}
      />
    );
  }

  return (
    <div
      className={`mx-auto ${classes["weather-pane"]} ${
        props.radio !== WEATHER_STR && "d-none"
      }`}
    >
      {content}
    </div>
  );
};

export default Weather;
