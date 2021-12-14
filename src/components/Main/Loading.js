import classes from "./Loading.module.scss";

const Loading = (props) => {
  return (
    <div
      className={`spinner-border text-primary ${
        classes[`spinner-size-${props.type}`]
      }`}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
