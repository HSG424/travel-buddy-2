import classes from "./Weather.module.scss";
import { WEATHER_STR } from "../../config.js";

const Weather = (props) => {
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
        <li className="list-group-item">Temperature: 83&#176;F</li>
        <li className="list-group-item">Feels Like: 93&#176;F</li>
        <li className="list-group-item">Shade Temp: 93&#176;F</li>
        <li className="list-group-item">
          24-hour High/Low: 88&#176;F / 78&#176;F
        </li>
        <li className="list-group-item">Relative Humidity: 85%</li>
        <li className="list-group-item">Wind: 7 mi/h</li>
        <li className="list-group-item">UV Index: 1 (Low)</li>
        <li className="list-group-item">Visibility: 5 mi</li>
        <li className="list-group-item">Precipitation (1 hour): 0 in</li>
        <li className="list-group-item">Precipitation (24 hours): 0.25 in</li>
        <li className="list-group-item">Latitude: 10.932152</li>
        <li className="list-group-item">Longitude: 104.798771</li>
        <li className="list-group-item">Last Update: 10/8/2021, 5:05:00 PM</li>
      </ul>
    </div>
  );
};

export default Weather;
