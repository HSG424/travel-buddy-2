import classes from "./Results.module.scss";

const Results = (props) => {
  return (
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
  );
};

export default Results;
