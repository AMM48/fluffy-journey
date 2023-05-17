import React from "react";

function useWeatherData() {
  const [data, setData] = React.useState({
    name: "Jeddah",
    country: "(SA)",
    tempC: null,
    tempF: null,
    tempMinC: null,
    tempMinF: null,
    tempMaxC: null,
    tempMaxF: null,
    description: "",
    icon: "",
    forecastData: "",
    isDay: 1,
  });

  const handleChange = (event) => {
    setData({ ...data, name: event.target.value });
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      if (data.name !== "") {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${data.name}&days=8&aqi=no&alerts=no`,
          requestOptions
        );
        const res = await response.json();
        setData({
          name: res.location.name,
          country: `(${res.location.country})`,
          tempC: res.current.temp_c,
          tempF: res.current.temp_f,
          tempMinC: res.forecast.forecastday[0].day.mintemp_c,
          tempMinF: res.forecast.forecastday[0].day.mintemp_f,
          tempMaxC: res.forecast.forecastday[0].day.maxtemp_c,
          tempMaxF: res.forecast.forecastday[0].day.maxtemp_f,
          description: res.current.condition.text,
          icon: res.current.condition.icon,
          forecastData: res.forecast.forecastday,
          isDay: res.current.is_day,
        });
      }
    } catch (e) {
      alert("Please enter a valid City name");
      setData({
        name: "",
        country: "",
        tempC: "NaN",
        tempF: "NaN",
        tempMinC: "NaN",
        tempMinF: "NaN",
        tempMaxC: "NaN",
        tempMaxF: "NaN",
        description: "",
        icon: "",
        isDay: 1,
        forecastData: "NaN",
      });
    }
  };

  return {
    data,
    handleChange,
    fetchData,
  };
}

export default useWeatherData;
