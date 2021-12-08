import { useEffect, useState, Fragment, useCallback } from "react";
import classes from "./Weather.module.scss";
import { WEATHER_STR } from "../../../config.js";
import Geolocation from "../../../helpers/Geolocation";
import useHttp from "../../../hooks/use-accuweather-mock-data";
//import useHttp from "../../hooks/use-http";
import {
  ACCUWEATHER_API,
  ACCUWEATHER_KEY,
  METRIC_STR,
  IMPERIAL_STR,
} from "../../../config.js";
import {
  weatherLocationStr,
  weatherConditionsList,
  weatherDescription,
  weatherIcon,
} from "../../../helpers/weather";
import Error from "./Error";
import Loading from "./Loading";

const Weather = (props) => {
  const [selectedSystem, setSelectedSystem] = useState(IMPERIAL_STR);

  const [weatherData, setWeatherData] = useState({});

  const [weatherLocation, setWeatherLocation] = useState("");

  const [weatherConditions, setWeatherConditions] = useState({
    weatherDescription: "",
    weatherIcon: "",
    weatherConditions: [],
  });

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

  const geolocation = useCallback(async () => {
    try {
      const location = new Geolocation();
      await location.latitudeLongitude();

      fetchWeatherLocation(
        {
          url: `${ACCUWEATHER_API}locations/v1/cities/geoposition/search?apikey=${ACCUWEATHER_KEY}&q=${location.latitude}%2C${location.longitude}`,
        },
        processWeatherLocation
      );
    } catch (error) {
      console.log("CATCH BLOCK:: ", error, error.message);
    }
  }, [fetchWeatherLocation, processWeatherLocation]);

  useEffect(() => {
    geolocation();
  }, [geolocation]);

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

  let content;

  if (errorLocation || errorConditions) {
    content = (
      <Error
        errorLocation={errorLocation}
        errorConditions={errorConditions}
        onGeolocation={geolocation}
      />
    );
  }

  if (loadingLocation || loadingConditions) {
    content = <Loading />;
  }

  if (weatherConditions.weatherConditions.length > 0) {
    content = (
      <Fragment>
        <h3 className={`text-primary ${classes["weather-description"]}`}>
          {weatherConditions.weatherDescription}
        </h3>
        <img
          className={classes["weather-image"]}
          src={weatherConditions.weatherIcon}
          alt={weatherConditions.weatherDescription}
        />

        <h5 className={`text-secondary ${classes["weather-location"]}`}>
          {weatherLocation}
        </h5>

        <div
          className={`mx-auto ${classes["switch-systems"]} ${
            !weatherConditions.weatherConditions.length && "d-none"
          }`}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="switch-system"
              id={`switch${IMPERIAL_STR}`}
              autoComplete="off"
              checked={selectedSystem === IMPERIAL_STR}
              onChange={changeSystemHandler}
              value={IMPERIAL_STR}
            />
            <label
              className="form-check-label"
              htmlFor={`switch${IMPERIAL_STR}`}
            >
              {IMPERIAL_STR}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="switch-system"
              id={`switch${METRIC_STR}`}
              autoComplete="off"
              checked={selectedSystem === METRIC_STR}
              onChange={changeSystemHandler}
              value={METRIC_STR}
            />
            <label className="form-check-label" htmlFor={`switch${METRIC_STR}`}>
              {METRIC_STR}
            </label>
          </div>
        </div>

        <ul className={`list-group ${classes["weather-list"]}`}>
          {weatherConditions.weatherConditions.map((condition) => (
            <li className="list-group-item">{condition}</li>
          ))}
        </ul>
      </Fragment>
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