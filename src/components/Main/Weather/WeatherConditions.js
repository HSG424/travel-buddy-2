import { Fragment } from "react";
import classes from "./WeatherConditions.module.scss";
import { METRIC_STR, IMPERIAL_STR } from "../../../config.js";

const WeatherConditions = (props) => {
  return (
    <Fragment>
      <h3 className={`text-primary ${classes["weather-description"]}`}>
        {props.weatherConditions.weatherDescription}
      </h3>
      <img
        className={classes["weather-image"]}
        src={props.weatherConditions.weatherIcon}
        alt={props.weatherConditions.weatherDescription}
      />

      <h5 className={`text-secondary ${classes["weather-location"]}`}>
        {props.weatherLocation}
      </h5>

      <div className={`mx-auto ${classes["switch-systems"]}`}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="switch-system"
            id={`switch${IMPERIAL_STR}`}
            autoComplete="off"
            checked={props.selectedSystem === IMPERIAL_STR}
            onChange={props.onChangeSystem}
            value={IMPERIAL_STR}
          />
          <label className="form-check-label" htmlFor={`switch${IMPERIAL_STR}`}>
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
            checked={props.selectedSystem === METRIC_STR}
            onChange={props.onChangeSystem}
            value={METRIC_STR}
          />
          <label className="form-check-label" htmlFor={`switch${METRIC_STR}`}>
            {METRIC_STR}
          </label>
        </div>
      </div>

      <ul className={`list-group ${classes["weather-list"]}`}>
        {props.weatherConditions.weatherConditions.map((condition, i) => (
          <li className="list-group-item" key={`condition-${i}`}>
            {condition}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default WeatherConditions;
