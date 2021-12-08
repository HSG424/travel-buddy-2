import { Fragment } from "react";
import classes from "./Error.module.scss";

const Error = (props) => {
  return (
    <Fragment>
      <div
        className={`alert alert-danger ${classes["alert-http"]}`}
        role="alert"
      >
        {props.errorLocation || props.errorConditions}
      </div>

      <button
        type="button"
        className={`btn btn-primary ${classes["try-again"]}`}
        onClick={props.onGeolocation}
      >
        Try Again
      </button>
    </Fragment>
  );
};

export default Error;
