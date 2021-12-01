import { useEffect, useState } from "react";
import classes from "./Weather.module.scss";
import { WEATHER_STR } from "../../config.js";
import Geolocation from "../../helpers/Geolocation";
import useHttp from "../../hooks/use-http";
import { ACCUWEATHER_API, ACCUWEATHER_KEY } from "../../config.js";
import { weatherConditionsFormat } from "../../helpers/weather";

const Weather = (props) => {
  const [weatherConditions, setWeatherConditions] = useState([]);

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

  useEffect(() => {
    //return;

    const processWeatherLocation = (weatherData) => {
      console.log(
        weatherData.Key,
        weatherData.EnglishName,
        weatherData.AdministrativeArea.EnglishName,
        weatherData.Country.EnglishName
      );

      fetchWeatherConditions(
        {
          url: `${ACCUWEATHER_API}currentconditions/v1/${weatherData.Key}?apikey=${ACCUWEATHER_KEY}&details=true `,
        },
        processWeatherConditions
      );
    };

    const processWeatherConditions = (weatherData) => {
      setWeatherConditions(weatherConditionsFormat(weatherData[0]));
    };

    const geolocation = async () => {
      try {
        const location = new Geolocation();
        await location.latitudeLongitude();
        console.log(location.latitude, location.longitude);
        fetchWeatherLocation(
          {
            url: `${ACCUWEATHER_API}locations/v1/cities/geoposition/search?apikey=${ACCUWEATHER_KEY}&q=${location.latitude}%2C${location.longitude}`,
          },
          processWeatherLocation
        );
      } catch (error) {
        console.log("CATCH BLOCK:: ", error, error.message);
      }
    };
    geolocation();
  }, [fetchWeatherLocation, fetchWeatherConditions]);

  const changeSystem = (event) => {
    console.log("switch the system");
  };

  return (
    <div
      className={`mx-auto ${classes["weather-pane"]} ${
        props.radio !== WEATHER_STR && "d-none"
      }`}
    >
      <h3 className={`text-primary ${classes["weather-description"]}`}>
        Cloudy
      </h3>
      <img
        className={classes["weather-image"]}
        src="https://developer.accuweather.com/sites/default/files/07-s.png"
        alt="Accuweather weather graphic"
      />

      <h5 className={`text-secondary ${classes["weather-location"]}`}>
        Takev, Taakaev Cambodia
      </h5>

      <div className={`mx-auto ${classes["switch-systems"]}`}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
            onChange={changeSystem}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Imperial
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={changeSystem}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Metric
          </label>
        </div>
      </div>

      <ul className={`list-group ${classes["weather-list"]}`}>
        {weatherConditions.map((condition) => (
          <li className="list-group-item">{condition}</li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;
