import classes from "./Error.module.scss";

const Error = (props) => {
  return (
    <div
      className={`alert alert-danger ${classes[`alert-${props.type}`]}`}
      role="alert"
    >
      {props.errorMsg}
    </div>
  );
};

export default Error;
