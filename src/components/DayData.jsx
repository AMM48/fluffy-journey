import React from "react";

function DayData(props) {
  return (
    <div className="flex hourly--data">
      <h3>{props.data.date}</h3>
      <img src={props.data.icon} alt={props.data.description} />
      <p>
        {props.data.temp.toFixed(2)} {props.data.tempUnit}
      </p>
    </div>
  );
}

export default DayData;
