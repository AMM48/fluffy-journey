import { useState, useEffect } from "react";
function useForecast(props) {
  const [forecastData, setForecastData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [props.name, props.temperatureUnit]);
  const fetchData = async () => {
    try {
      console.log(props.forcastData);
      const data = props.forecastData.slice(0, 8).map((item) => ({
        date: item.date,
        icon: item.day.condition.icon,
        description: item.day.condition.text,
        temp:
          props.temperatureUnit === "°C"
            ? item.day.avgtemp_c
            : item.day.avgtemp_f,
        tempUnit: props.temperatureUnit,
      }));
      setForecastData(data);
    } catch (e) {}
  };

  return { forecastData };
}

export default useForecast;
