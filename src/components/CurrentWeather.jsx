import React from "react";

function getWeatherIcon(condition) {
  switch(condition) {
    case "Sunny": return "☀️";
    case "Rainy": return "🌧️";
    case "Cloudy": return "☁️";
    case "Partly Cloudy": return "⛅";
    default: return "🌤️";
  }
}

function CurrentWeather({ data }) {
  return (
    <section className="current-weather glass-panel">
      <div className="weather-main-left">
        <span className="weather-bigicon">{getWeatherIcon(data.condition)}</span>
        <div className="main-info">
          <h3 className="city">{data.location}</h3>
          <div className="temp-details">
            <span className="temp">{data.temperature}°C</span>
            <span className="condition">{data.condition}</span>
          </div>
        </div>
      </div>
      <div className="weather-stats">
        <div className="stat-block">
          <span className="label">
            <span className="weather-icon" role="img" aria-label="Thermometer">🌡️</span>
            Feels Like
          </span>
          <span className="stat-value">{data.feelsLike}°C</span>
        </div>
        <div className="stat-block">
          <span className="label">
            <span className="weather-icon" role="img" aria-label="Humidity">💧</span>
            Humidity
          </span>
          <span className="stat-value">{data.humidity}%</span>
        </div>
        <div className="stat-block">
          <span className="label">
            <span className="weather-icon" role="img" aria-label="Wind">💨</span>
            Wind
          </span>
          <span className="stat-value">{data.windSpeed} km/h</span>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
