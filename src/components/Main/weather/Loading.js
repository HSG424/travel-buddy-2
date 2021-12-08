import classes from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={`spinner-border text-primary ${classes["spinner-size"]}`}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
