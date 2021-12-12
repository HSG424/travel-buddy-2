import classes from "./Loading.module.scss";
import { WEATHER_STR } from "../../config.js";

const Loading = (props) => {
  const loadingType =
    props.type === WEATHER_STR
      ? "spinner-size-weather"
      : "spinner-size-translate";

  return (
    <div className={`spinner-border text-primary ${classes[loadingType]}`}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
