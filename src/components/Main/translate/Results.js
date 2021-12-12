import { Fragment } from "react";
import classes from "./Results.module.scss";
import Error from "../Error";
import { TRANSLATE_STR } from "../../../config.js";

const Results = (props) => {
  return (
    <Fragment>
      {props.error && <Error errorMsg={props.error} type={TRANSLATE_STR} />}
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
