import logo from "../logo.png";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <h1 className={`${classes["logo-style"]}`}>
        <a href="#" className={`mx-auto d-block ${classes["header-width"]}`}>
          <img
            src={logo}
            className={`d-block ${classes["header-width"]}`}
            alt="Travel Buddy Reloaded Logo"
          />
        </a>
      </h1>
    </header>
  );
};

export default Header;
