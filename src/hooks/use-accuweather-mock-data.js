/*
This useHttp custom hook does not make an HTTP request.
Rather, it simply returns a saved mock response.
This is necessary because Accuweather API services has a daily limit for their free plan.
As a result, we need to mock the API response for uninterrupted and speedy development.
*/
import { useState, useCallback } from "react";

const weatherLocationData = `{"Version":1,"Key":"1220543","Type":"City","Rank":51,"LocalizedName":"Takev","EnglishName":"Takev","PrimaryPostalCode":"","Region":{"ID":"ASI","LocalizedName":"Asia","EnglishName":"Asia"},"Country":{"ID":"KH","LocalizedName":"Cambodia","EnglishName":"Cambodia"},"AdministrativeArea":{"ID":"21","LocalizedName":"Taakaev","EnglishName":"Taakaev","Level":1,"LocalizedType":"Province","EnglishType":"Province","CountryID":"KH"},"TimeZone":{"Code":"ICT","Name":"Asia/Phnom_Penh","GmtOffset":7,"IsDaylightSaving":false,"NextOffsetChange":null},"GeoPosition":{"Latitude":10.983,"Longitude":104.783,"Elevation":{"Metric":{"Value":8,"Unit":"m","UnitType":5},"Imperial":{"Value":26,"Unit":"ft","UnitType":0}}},"IsAlias":false,"SupplementalAdminAreas":[],"DataSets":["AirQualityCurrentConditions","AirQualityForecasts"]}`;
const weatherConditionsData = `{"LocalObservationDateTime":"2021-12-06T18:56:00+07:00","EpochTime":1638791760,"WeatherText":"Partly cloudy","WeatherIcon":35,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":false,"Temperature":{"Metric":{"Value":28.2,"Unit":"C","UnitType":17},"Imperial":{"Value":83,"Unit":"F","UnitType":18}},"RealFeelTemperature":{"Metric":{"Value":29,"Unit":"C","UnitType":17,"Phrase":"Very Warm"},"Imperial":{"Value":84,"Unit":"F","UnitType":18,"Phrase":"Very Warm"}},"RealFeelTemperatureShade":{"Metric":{"Value":29,"Unit":"C","UnitType":17,"Phrase":"Very Warm"},"Imperial":{"Value":84,"Unit":"F","UnitType":18,"Phrase":"Very Warm"}},"RelativeHumidity":62,"IndoorRelativeHumidity":62,"DewPoint":{"Metric":{"Value":20.3,"Unit":"C","UnitType":17},"Imperial":{"Value":69,"Unit":"F","UnitType":18}},"Wind":{"Direction":{"Degrees":0,"Localized":"N","English":"N"},"Speed":{"Metric":{"Value":11.3,"Unit":"km/h","UnitType":7},"Imperial":{"Value":7,"Unit":"mi/h","UnitType":9}}},"WindGust":{"Speed":{"Metric":{"Value":25.6,"Unit":"km/h","UnitType":7},"Imperial":{"Value":15.9,"Unit":"mi/h","UnitType":9}}},"UVIndex":0,"UVIndexText":"Low","Visibility":{"Metric":{"Value":16.1,"Unit":"km","UnitType":6},"Imperial":{"Value":10,"Unit":"mi","UnitType":2}},"ObstructionsToVisibility":"","CloudCover":34,"Ceiling":{"Metric":{"Value":12192,"Unit":"m","UnitType":5},"Imperial":{"Value":40000,"Unit":"ft","UnitType":0}},"Pressure":{"Metric":{"Value":1011,"Unit":"mb","UnitType":14},"Imperial":{"Value":29.85,"Unit":"inHg","UnitType":12}},"PressureTendency":{"LocalizedText":"Rising","Code":"R"},"Past24HourTemperatureDeparture":{"Metric":{"Value":1.7,"Unit":"C","UnitType":17},"Imperial":{"Value":3,"Unit":"F","UnitType":18}},"ApparentTemperature":{"Metric":{"Value":30.6,"Unit":"C","UnitType":17},"Imperial":{"Value":87,"Unit":"F","UnitType":18}},"WindChillTemperature":{"Metric":{"Value":28.3,"Unit":"C","UnitType":17},"Imperial":{"Value":83,"Unit":"F","UnitType":18}},"WetBulbTemperature":{"Metric":{"Value":22.9,"Unit":"C","UnitType":17},"Imperial":{"Value":73,"Unit":"F","UnitType":18}},"Precip1hr":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"PrecipitationSummary":{"Precipitation":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"PastHour":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past3Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past6Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past9Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past12Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past18Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}},"Past24Hours":{"Metric":{"Value":0,"Unit":"mm","UnitType":3},"Imperial":{"Value":0,"Unit":"in","UnitType":1}}},"TemperatureSummary":{"Past6HourRange":{"Minimum":{"Metric":{"Value":28.2,"Unit":"C","UnitType":17},"Imperial":{"Value":83,"Unit":"F","UnitType":18}},"Maximum":{"Metric":{"Value":32.8,"Unit":"C","UnitType":17},"Imperial":{"Value":91,"Unit":"F","UnitType":18}}},"Past12HourRange":{"Minimum":{"Metric":{"Value":21.4,"Unit":"C","UnitType":17},"Imperial":{"Value":71,"Unit":"F","UnitType":18}},"Maximum":{"Metric":{"Value":32.8,"Unit":"C","UnitType":17},"Imperial":{"Value":91,"Unit":"F","UnitType":18}}},"Past24HourRange":{"Minimum":{"Metric":{"Value":20.3,"Unit":"C","UnitType":17},"Imperial":{"Value":69,"Unit":"F","UnitType":18}},"Maximum":{"Metric":{"Value":32.8,"Unit":"C","UnitType":17},"Imperial":{"Value":91,"Unit":"F","UnitType":18}}}},"MobileLink":"http://www.accuweather.com/en/kh/takev/1220543/current-weather/1220543?lang=en-us","Link":"http://www.accuweather.com/en/kh/takev/1220543/current-weather/1220543?lang=en-us"}`;

const resolveWeatherData = (url) => {
  return new Promise((resolve, reject) => {
    // testing error state
    //reject(new Error("Testing Error State..."));

    setTimeout(function () {
      if (url.includes("currentconditions")) {
        /*
        reject(
          new Error("Rejecting the Second API Call (Current Conditions API)")
        );
        */
        resolve([JSON.parse(weatherConditionsData)]);
      } else {
        //reject(new Error("Rejecting the First API Call (Locations API)"));
        resolve(JSON.parse(weatherLocationData));
      }
    }, 0.1 * 1000);
  });
};

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    //return;

    try {
      const data = await resolveWeatherData(requestConfig.url);
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
      console.log("error: ", err);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
