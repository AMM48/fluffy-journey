import DayData from "./DayData.jsx";
import useForecast from "./custom_hooks/useForecast.jsx";

function Forecast(props) {
  const forecastData = useForecast(props);

  return (
    <div id="forecast">
      <h2 id="title">8 - Days Forecast</h2>
      {forecastData.forecastData.map((data, index) => (
        <DayData key={index} data={data} />
      ))}
    </div>
  );
}

export default Forecast;
