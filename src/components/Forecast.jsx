import DayData from "./DayData.jsx";
import useForecast from "./custom_hooks/useForecast.jsx";

function Forecast(props) {
  const forecastData = useForecast(props);

  return (
    <div id="forecast">
      {props.name === "" ? (
        <>
          <h2 id="title">No Forecast</h2>
          <p></p>
        </>
      ) : (
        <>
          <h2 id="title">8 - Day Forecast</h2>
          {forecastData.forecastData.map((data, index) => (
            <DayData key={index} data={data} />
          ))}
        </>
      )}
    </div>
  );
}

export default Forecast;
