import React from "react";
import ForecastDay from "./ForecastDay";

function ForecastList({ days }) {
  // Duplicate the days for a seamless scroll
  const displayDays = [...days, ...days];
  return (
    <div className="forecast-carousel">
    <div className="forecast-list">
      {displayDays.map((info, idx) => (
        <ForecastDay dayInfo={info} key={idx} />
      ))}
    </div>
    </div>
  );
}


export default ForecastList;
