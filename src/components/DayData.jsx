import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
function DayData(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [day, setDay] = React.useState("");
  React.useEffect(() => {
    setDay(days[new Date(props.data.date).getDay()]);
  }, []);
  return (
    <div className="flex hourly--data">
      <h3>{day}</h3>
      <p>{props.data.date}</p>
      <img src={props.data.icon} alt={props.data.description} />
      <p id="forecastTemp">
        {props.data.temp}
        {props.data.tempUnit === "°C" ? (
          <TbTemperatureCelsius />
        ) : (
          <TbTemperatureFahrenheit />
        )}
      </p>
    </div>
  );
}

export default DayData;
