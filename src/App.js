import React from "react";
import "./App.css";
import CurrentWeather from "./components/currentWeather.jsx";
import Navbar from "./components/Navbar.jsx";
import Forecast from "./components/Forecast.jsx";
import useWeatherData from "./components/custom_hooks/useWeatherData";
import useTempUnit from "./components/custom_hooks/useTempUnit";
import { BsSearch } from "react-icons/bs";
function App() {
  const { data, handleChange, fetchData } = useWeatherData();
  const tempUnitObj = useTempUnit(data);
  return (
    <div className="App flex">
      <Navbar />
      <div className={data.isDay ? "container" : "container img"}>
        <div id="search">
          <input
            type="search"
            value={data.name}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                fetchData();
              }
            }}
            placeholder="Enter City Name"
          />
          <button onClick={fetchData}>
            <BsSearch />
          </button>
        </div>
        <CurrentWeather {...tempUnitObj} />
        <Forecast {...tempUnitObj} />
      </div>
    </div>
  );
}

export default App;
