import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { getFirstEightEntries } from "../utils/getData";
import { dailyWeatherDesc } from "../utils/dailyWeatherDesc";
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [currweather, setCurrWeather] = useState({});
  const [desc, setDesc] = useState("");
  const [visibility, setVisibility] = useState();
  const [wind, setWind] = useState({});
  const [avgTemp, setAvgTemp] = useState([]);
  const [place, setPlace] = useState("Hyderabad");
  const [sunTime, setSunTime] = useState([]);
  const [houlyTime, setHourlyTime] = useState([]);
  const [descArray, setdescArray] = useState([]);
  const [tempValues, setTempValues] = useState([]);
  const [descValues, setdescValues] = useState([]);
  let apiUrl = "https://api.openweathermap.org/data/2.5/forecast";
  let key = "51c4a28a7e982c8c74edd33421676204";
  // fetch api
  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `${apiUrl}?q=${place}&appid=${key}&units=metric`
      );
      console.log(res);
      const weatherData = res.data; // Access the weather data directly
      const list = weatherData.list;

      setCurrWeather(list[0].main);
      setDesc(list[0].weather[0].description);
      setVisibility(list[0].visibility);
      setWind(list[0].wind);
      setSunTime([weatherData.city.sunrise, weatherData.city.sunset]);
      const dailyTemps = {};
      list.forEach((entry) => {
        const date = entry.dt_txt.split(" ")[0];

        if (!dailyTemps[date]) {
          dailyTemps[date] = [];
        }
        dailyTemps[date].push(entry.main.temp);
      });
      const averageTemps = Object.keys(dailyTemps).map((date) => {
        const temps = dailyTemps[date];
        const averageTemp =
          temps.reduce((sum, temp) => sum + temp, 0) / temps.length;
        return parseFloat(averageTemp.toFixed(1));
      });
      // const dailydesc = dailyWeatherDesc(list);
      // setdailyDesc(dailydesc);

      setAvgTemp(averageTemps);
      const { timeArray, descriptionArray, tempArray } =
        getFirstEightEntries(weatherData);
      setdescArray(descriptionArray);
      setTempValues(tempArray);
      setHourlyTime(timeArray);
      const temp = dailyWeatherDesc(list);
      console.log(temp);
      setdescValues(temp);
    } catch (e) {
      console.log(e);
      // if the api throws error.
      alert("This place does not exist");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  return (
    <StateContext.Provider
      value={{
        currweather,
        setPlace,
        sunTime,
        desc,
        visibility,
        wind,
        avgTemp,
        place,
        houlyTime,
        tempValues,
        descArray,
        descValues,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
