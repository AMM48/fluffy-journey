import React from "react";

function useTempUnit(props) {
  const [isCelsius, setIsCelsius] = React.useState(true);
  const [temperatureUnit, setTemperatureUnit] = React.useState("°C");
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
