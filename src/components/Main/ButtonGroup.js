import classes from "./ButtonGroup.module.scss";
import { WEATHER_STR, TRANSLATE_STR } from "../../config.js";

const ButtonGroup = (props) => {
  const changeRadioHandler = (event) => {
    props.onChangeRadio(event.target.value);
  };
  return (
    <div className={`btn-group mx-auto ${classes.switch}`}>
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id={`radio-${WEATHER_STR}`}
        autoComplete="off"
        checked={props.radio === WEATHER_STR}
        value={WEATHER_STR}
        onChange={changeRadioHandler}
      />
      <label
        className="btn btn-outline-primary"
        htmlFor={`radio-${WEATHER_STR}`}
      >
        {WEATHER_STR}
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id={`radio-${TRANSLATE_STR}`}
        autoComplete="off"
        checked={props.radio === TRANSLATE_STR}
        value={TRANSLATE_STR}
        onChange={changeRadioHandler}
      />
      <label
        className="btn btn-outline-primary"
        htmlFor={`radio-${TRANSLATE_STR}`}
      >
        {TRANSLATE_STR}
      </label>
    </div>
  );
};

export default ButtonGroup;
