import React from "react";

function useTempUnit(props) {
  const [isCelsius, setIsCelsius] = React.useState(
    localStorage.getItem("unit") === "°C" ? true : false
  );
  const [temperatureUnit, setTemperatureUnit] = React.useState(
    localStorage.getItem("unit") ? localStorage.getItem("unit") : "°C"
  );
  const toggleTemperatureUnitC = () => {
    if (!isCelsius) {
      setIsCelsius(!isCelsius);
      setTemperatureUnit("°C");
    }
  };
  const toggleTemperatureUnitF = () => {
    if (isCelsius) {
      setIsCelsius(!isCelsius);
      setTemperatureUnit("°F");
    }
  };
  const celsiusClass = isCelsius ? "selected metr" : "not-selected metr";
  const fahrenheitClass = !isCelsius ? "selected metr" : "not-selected metr";
  return {
    ...props,
    temperatureUnit,
    celsiusClass,
    fahrenheitClass,
    toggleTemperatureUnitC,
    toggleTemperatureUnitF,
  };
}

export default useTempUnit;
