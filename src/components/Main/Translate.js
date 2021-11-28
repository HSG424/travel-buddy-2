import classes from "./Translate.module.scss";
import { TRANSLATE_STR } from "../../config.js";

const Translate = (props) => {
  return (
    <div
      className={`mx-auto ${classes["translate-pane"]} ${
        props.radio !== TRANSLATE_STR && "d-none"
      }`}
    >
      <form>
        <div className={classes["input-field-cont"]}>
          <label className={classes["form-label"]}>Text to Translate</label>
          <input
            type="text"
            className="form-control"
            maxLength="50"
            placeholder="Enter Text"
          />
        </div>

        <div className={classes["input-field-cont"]}>
          <label className={classes["form-label"]}>From</label>
          <select className="form-control"></select>
        </div>

        <div className={classes["input-field-cont"]}>
          <label className={classes["form-label"]}>To</label>
          <select className="form-control"></select>
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${classes["translate-submit"]}`}
        >
          Translate
        </button>

        <div
          className={`spinner-border text-primary ${classes["spinner-size"]}`}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </form>

      <div className={`card text-muted ${classes["card-mt"]}`}>
        <div className="card-header">Results</div>
        <div className={`card-body ${classes["card-body-pb"]}`}>
          <p>
            English: <span className="fw-bold">Squirrel</span>
          </p>
          <p>
            Korean: <span className="fw-bold">******</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Translate;
