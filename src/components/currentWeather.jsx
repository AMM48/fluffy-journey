import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";

function CurrentWeather(props) {
  return (
    <div id="current" className="flex">
      <img src={props.icon} alt={props.description} />
      <h3 id="desc">
        {props.name} {props.country} - {props.description}
      </h3>
      <div className="stats flex">
        <div className="side">
          <h3>Min</h3>
          <p>
            {props.temperatureUnit === "°C" ? props.tempMinC : props.tempMinF}
            {props.temperatureUnit === "°C" ? (
              <TbTemperatureCelsius />
            ) : (
              <TbTemperatureFahrenheit />
            )}
          </p>
        </div>
        <div id="main">
          <h2>Current</h2>
          <p>
            {props.temperatureUnit === "°C" ? props.tempC : props.tempF}
            {props.temperatureUnit === "°C" ? (
              <TbTemperatureCelsius />
            ) : (
              <TbTemperatureFahrenheit />
            )}
          </p>
        </div>
        <div className="side">
          <h3>Max</h3>

          <p>
            {props.temperatureUnit === "°C" ? props.tempMaxC : props.tempMaxF}
            {props.temperatureUnit === "°C" ? (
              <TbTemperatureCelsius />
            ) : (
              <TbTemperatureFahrenheit />
            )}
          </p>
        </div>
      </div>
      <h4 id="metricss">
        <span
          className={props.celsiusClass}
          onClick={props.toggleTemperatureUnitC}
        >
          C
        </span>

        <span
          className={props.fahrenheitClass}
          onClick={props.toggleTemperatureUnitF}
        >
          F
        </span>
      </h4>
    </div>
  );
}

export default CurrentWeather;
