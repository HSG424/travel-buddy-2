# Travel Buddy 2

[Travel Buddy 2](https://travel-buddy-reloaded.web.app) provides tools to users that are traveling to foreign countries.

Current weather conditions ([AccuWeather API](https://developer.accuweather.com/apis)) are displayed after detecting the user's latitude and longitude via the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API). There is also a language translation tool users can use which consumes API endpoints provided by [MyMemory](https://mymemory.translated.net/doc/spec.php) (language translation).

[Travel Buddy 2](https://travel-buddy-reloaded.web.app) uses [React](https://reactjs.org/) while the original [Travel Buddy](https://github.com/HSG424/travel-buddy) uses Vanilla JavaScript.

Live deployment (Firebase): [https://travel-buddy-reloaded.web.app](https://travel-buddy-reloaded.web.app)

## Project Screen Shots

![Weather functionality screenshot](/public/ss1.png?raw=true "Weather functionality screenshot")
![Translate functionality screenshot](/public/ss2.png?raw=true "Translate functionality screenshot")

## Installation and Setup Instructions

Clone down this repository. You will need `node`, `npm`, and `yarn` installed globally on your machine.

### In the project directory, you can run:

### `yarn install`

Installs project dependencies (node_modules) as defined in package.json.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Reflection

The original [Travel Buddy](https://github.com/HSG424/travel-buddy) web app was developed using Vanilla Javascript.

In order to practice key concepts I learned in [Udemy’s top React course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/), I chose to redo the Travel Buddy project using React.

This was not my first time using a front-end library/framework.

My last job primarily involved using Vue.js so the React development and build process was nothing new or difficult.

## Built With

- [Create React App](https://create-react-app.dev/)

- [Bootstrap 5.1](https://getbootstrap.com/docs/5.1/getting-started/introduction/) - CSS Framework

- [Sass](https://sass-lang.com/) - CSS preprocessor

- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) - Get user latitude and longitude

- [AccuWeather API](https://developer.accuweather.com/apis) - Get location name and current weather stats

- [MyMemory API](https://mymemory.translated.net/doc/spec.php) - Translate language

- [Visual Studio Code](https://code.visualstudio.com/) - Text editor

- [Chrome Web Browser](https://www.google.com/chrome/) - Web browser where application is run

## Authors

- **Fred Han** - (https://github.com/HSG424)

## License

This project is licensed under the MIT License
