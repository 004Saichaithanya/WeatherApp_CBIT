import React from "react";

function getForecastIcon(condition) {
  switch(condition) {
    case "Sunny": return "☀️";
    case "Rainy": return "🌧️";
    case "Cloudy": return "☁️";
    case "Partly Cloudy": return "⛅";
    default: return "🌡️";
  }
}

function ForecastDay({ dayInfo }) {
  return (
    <div className="forecast-card glass-card">
      <div className="forecast-title">{dayInfo.day}</div>
      <div className="forecast-date">{dayInfo.date}</div>
      <div className="forecast-icon">{getForecastIcon(dayInfo.condition)}</div>
      <div className="forecast-temp">{dayInfo.temp}°</div>
      <div className="forecast-min">Min: {dayInfo.min}°</div>
      <div className="forecast-condition">{dayInfo.condition}</div>
    </div>
  );
}

export default ForecastDay;
