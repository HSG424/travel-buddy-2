import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Weather from "./weather/Weather";
import Translate from "./translate/Translate";
import { WEATHER_STR } from "../../config.js";

const Main = () => {
  const [radio, setRadio] = useState(WEATHER_STR);

  const changeRadioHandler = (radioValue) => {
    setRadio(radioValue);
  };
  return (
    <main>
      <ButtonGroup radio={radio} onChangeRadio={changeRadioHandler} />
      <Weather radio={radio} />
      <Translate radio={radio} />
    </main>
  );
};

export default Main;
