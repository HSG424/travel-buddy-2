import { useState } from "react";
import classes from "./Translate.module.scss";
import {
  MY_MEMORY_API,
  TRANSLATE_STR,
  TRANSLATE_FROM,
  TRANSLATE_TO,
} from "../../../config.js";
import useHttp from "../../../hooks/use-http";
import Form from "./Form";
import Results from "./Results";
import Error from "../Error";

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
      <Form
        onSubmit={submitHandler}
        onTranslateChange={translateChangeHandler}
        onFromChange={fromChangeHandler}
        onToChange={toChangeHandler}
        isLoading={isLoading}
        translateText={translateText}
      />
      {error && <Error errorMsg={error} type={TRANSLATE_STR} />}
      <Results translatedText={translatedText} />
    </div>
  );
};

export default Translate;
