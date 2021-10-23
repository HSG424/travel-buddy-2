import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`text-center text-muted ${classes["footer-font"]}`}>
      <p>
        Powered by{" "}
        <a
          href="https://developer.accuweather.com/apis"
          target="_blank"
          rel="noreferrer"
        >
          AccuWeather API
        </a>{" "}
        |{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
          target="_blank"
          rel="noreferrer"
        >
          Geolocation API
        </a>{" "}
        |{" "}
        <a
          href="https://mymemory.translated.net/doc/spec.php"
          target="_blank"
          rel="noreferrer"
        >
          MyMemory API
        </a>
      </p>
    </footer>
  );
};

export default Footer;
