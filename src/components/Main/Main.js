import { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Weather from "./Weather";
import Translate from "./Translate";
import { weatherStr } from "../../config.js";

const Main = () => {
  const [radio, setRadio] = useState(weatherStr);

  const changeRadio = (radioValue) => {
    setRadio(radioValue);
  };
  return (
    <main>
      <ButtonGroup radio={radio} onChangeRadio={changeRadio} />
      <Weather radio={radio} />
      <Translate radio={radio} />
    </main>
  );
};

export default Main;
