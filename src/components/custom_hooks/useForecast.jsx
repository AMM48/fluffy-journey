import { useState, useEffect } from "react";
function useForecast(props) {
  const [forecastData, setForecastData] = useState([]);
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    try {
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
      localStorage.setItem("unit", props.temperatureUnit);
    } catch (e) {}
  };

  return { forecastData };
}

export default useForecast;
