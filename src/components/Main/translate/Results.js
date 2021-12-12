import { Fragment } from "react";
import classes from "./Results.module.scss";

const Results = (props) => {
  return (
    <Fragment>
      <div
        className={`${!props.error && "d-none"} alert alert-danger ${
          classes["alert-margin"]
        }`}
        role="alert"
      >
        {props.error}
      </div>

      <div
        className={`${
          !props.translatedText && "d-none"
        } card text-center text-white bg-primary ${classes["card-mt"]}`}
      >
        <div className="card-header">Result</div>
        <div className={`card-body ${classes["card-body-translate"]}`}>
          {props.translatedText}
        </div>
      </div>
    </Fragment>
  );
};

export default Results;
