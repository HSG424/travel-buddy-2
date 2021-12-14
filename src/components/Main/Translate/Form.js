import isoLanguages from "../../../helpers/languages";

import {
  TRANSLATE_FROM,
  TRANSLATE_TO,
  TRANSLATE_STR,
} from "../../../config.js";

import Loading from "../Loading";

import classes from "./Form.module.scss";

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className={classes["input-field-cont"]}>
        <label className={classes["form-label"]}>Text to Translate</label>
        <input
          type="text"
          className="form-control"
          maxLength="50"
          placeholder="Enter Text"
          onChange={props.onTranslateChange}
        />
      </div>

      <div className={classes["input-field-cont"]}>
        <label className={classes["form-label"]}>From</label>
        <select
          className="form-control"
          onChange={props.onFromChange}
          defaultValue={TRANSLATE_FROM}
        >
          {isoLanguages.map((lang, i) => (
            <option value={lang.code} key={`from-${i}`}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <div className={classes["input-field-cont"]}>
        <label className={classes["form-label"]}>To</label>
        <select
          className="form-control"
          onChange={props.onToChange}
          defaultValue={TRANSLATE_TO}
        >
          {isoLanguages.map((lang, i) => (
            <option value={lang.code} key={`to-${i}`}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className={`btn btn-primary ${classes["translate-submit"]}`}
        disabled={!props.translateText.length > 0 || props.isLoading}
      >
        Translate
      </button>

      {props.isLoading && <Loading type={TRANSLATE_STR} />}
    </form>
  );
};

export default Form;
