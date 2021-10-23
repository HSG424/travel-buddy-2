import classes from "./ButtonGroup.module.scss";
import { weatherStr, translateStr } from "../../config.js";

const ButtonGroup = (props) => {
  const changeRadio = (event) => {
    props.onChangeRadio(event.target.value);
  };
  return (
    <div className={`btn-group mx-auto ${classes.switch}`}>
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id={`radio-${weatherStr}`}
        autoComplete="off"
        checked={props.radio === weatherStr}
        value={weatherStr}
        onChange={changeRadio}
      />
      <label
        className="btn btn-outline-primary"
        htmlFor={`radio-${weatherStr}`}
      >
        {weatherStr}
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id={`radio-${translateStr}`}
        autoComplete="off"
        checked={props.radio === translateStr}
        value={translateStr}
        onChange={changeRadio}
      />
      <label
        className="btn btn-outline-primary"
        htmlFor={`radio-${translateStr}`}
      >
        {translateStr}
      </label>
    </div>
  );
};

export default ButtonGroup;
