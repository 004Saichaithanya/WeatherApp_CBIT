import React from "react";
import "./styles.css";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";

// Mock data for demo purposes
const weatherNow = {
  location: "Hyderabad, Telangana",
  temperature: 28,
  feelsLike: 31,
  humidity: 65,
  windSpeed: 12,
  condition: "Partly Cloudy",
  updated: new Date().toLocaleTimeString(),
};

const forecast = [
  { day: "Today", date: "Aug 7", temp: 28, min: 18, condition: "Partly Cloudy" },
  { day: "Friday", date: "Aug 8", temp: 30, min: 20, condition: "Sunny" },
  { day: "Saturday", date: "Aug 9", temp: 26, min: 16, condition: "Rainy" },
  { day: "Sunday", date: "Aug 10", temp: 24, min: 14, condition: "Cloudy" },
  { day: "Monday", date: "Aug 11", temp: 27, min: 17, condition: "Sunny" },
  { day: "Tuesday", date: "Aug 12", temp: 29, min: 19, condition: "Partly Cloudy" },
  { day: "Wednesday", date: "Aug 13", temp: 25, min: 15, condition: "Rainy" },
];

function App() {
  return (
    <div className="container">
            {/* Watermark div */}
      <div className="watermark" />
      <header className="header glass-bg">
        <span className="logo">
          <img src="/Astra.png" alt="CBIT Logo" />
        </span>
        <div className="header-content">
          <h1>CBIT Weather Station</h1>
          <p>Real-time Weather Monitoring System</p>
        </div>
      </header>

      <main className="main-content">
        <CurrentWeather data={weatherNow} />
        <section className="forecast-section glass-bg">
          <h2>7-Day Forecast</h2>
          <div className="forecast-carousel">
            <ForecastList days={forecast} />
          </div>
        </section>
      </main>

      <footer className="footer glass-bg">
        <span>Updated: {weatherNow.updated}</span>
      </footer>
    </div>
  );
}

export default App;
