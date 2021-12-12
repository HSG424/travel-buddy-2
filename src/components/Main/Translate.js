import { useState } from "react";
import classes from "./Translate.module.scss";
import {
  MY_MEMORY_API,
  TRANSLATE_STR,
  TRANSLATE_FROM,
  TRANSLATE_TO,
} from "../../config.js";
import languageCodes from "../../helpers/languages";
import useHttp from "../../hooks/use-http";

const Translate = (props) => {
  const [translateText, setTranslateText] = useState("");
  const [translateFrom, setTranslateFrom] = useState(TRANSLATE_FROM);
  const [translateTo, setTranslateTo] = useState(TRANSLATE_TO);

  const [translatedText, setTranslatedText] = useState("");

  const { isLoading, error, sendRequest } = useHttp();

  const translateChangeHandler = (event) => {
    setTranslateText(event.target.value);
  };

  const fromChangeHandler = (event) => {
    setTranslateFrom(event.target.value);
  };

  const toChangeHandler = (event) => {
    setTranslateTo(event.target.value);
  };

  const processTranslation = (data) => {
    setTranslatedText(data.responseData.translatedText);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTranslatedText("");
    sendRequest(
      {
        url: `${MY_MEMORY_API}?q=${encodeURIComponent(
          translateText
        )}&langpair=${translateFrom}|${translateTo}`,
      },
      processTranslation
    );
  };

  return (
    <div
      className={`mx-auto ${classes["translate-pane"]} ${
        props.radio !== TRANSLATE_STR && "d-none"
      }`}
    >
      <form onSubmit={submitHandler}>
        <div className={classes["input-field-cont"]}>
          <label className={classes["form-label"]}>Text to Translate</label>
          <input
            type="text"
            className="form-control"
            maxLength="50"
            placeholder="Enter Text"
            onChange={translateChangeHandler}
          />
        </div>

        <div className={classes["input-field-cont"]}>
          <label className={classes["form-label"]}>From</label>
          <select className="form-control" onChange={fromChangeHandler}>
            {languageCodes.map((lang) => (
              <option value={lang.code} selected={lang.code === TRANSLATE_FROM}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div className={classes["input-field-cont"]}>
          <label className={classes["form-label"]}>To</label>
          <select className="form-control" onChange={toChangeHandler}>
            {languageCodes.map((lang) => (
              <option value={lang.code} selected={lang.code === TRANSLATE_TO}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${classes["translate-submit"]}`}
          disabled={!translateText.length > 0 || isLoading}
        >
          Translate
        </button>

        <div
          className={`${!isLoading && "d-none"} spinner-border text-primary ${
            classes["spinner-size"]
          }`}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </form>

      <div
        className={`${!error && "d-none"} alert alert-danger ${
          classes["alert-margin"]
        }`}
        role="alert"
      >
        {error}
      </div>

      <div
        className={`${
          !translatedText && "d-none"
        } card text-center text-white bg-primary ${classes["card-mt"]}`}
      >
        <div className="card-header">Result</div>
        <div className={`card-body ${classes["card-body-translate"]}`}>
          {translatedText}
        </div>
      </div>
    </div>
  );
};

export default Translate;
