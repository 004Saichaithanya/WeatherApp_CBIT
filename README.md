# CBIT Weather Station WebApp

A modern, responsive weather forecast dashboard built with **React.js** and **Vite**. Designed specifically for **CBIT College** use, this app displays current weather conditions and a 7-day forecast with smooth auto-scrolling cards. It features a sleek glassmorphism style and a subtle CBIT logo watermark for branding.

## Features

- Displays **current weather**: temperature, humidity, wind speed, and feels-like temperature.
- **7-day forecast cards** with weather conditions and icons.
- **Smooth automatic horizontal scrolling** carousel for the forecast cards—ideal for monitor or kiosk display.
- Modern **glassmorphic UI** design with Montserrat font for a clean and professional look.
- Responsive layout for use on different screen sizes.
- Subtle **CBIT logo watermark** for college branding.

## Installation

1. Clone the repo and navigate to the project folder:
   ```bash
   git clone 
   cd WeatherAppCBIT
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173` (or as indicated in your terminal).

## Usage

- The app uses mock weather data but is ready for integration with live weather APIs (e.g., OpenWeatherMap).
- Place your CBIT logos (`cbit_logo.png` and watermark image) inside the `public` folder.
- The 7-day forecast cards will smoothly auto-scroll across the screen.
- Styling and animation can be adjusted in `styles.css`.

## File Structure

```
/src
  |-- App.jsx        # Main app component
  |-- components/
        |-- CurrentWeather.jsx
        |-- ForecastDay.jsx
        |-- ForecastList.jsx
  |-- styles.css     # All CSS styles including animations and responsiveness
/public
  |-- cbit_logo.png  # CBIT logo 
  |-- cbit_logo_watermark.png  # Watermark logo
```

## Customization

- Swap the weather icons from Unicode emojis to SVG or icon libraries as preferred.
- Adjust the scroll speed by modifying the `animation-duration` in CSS `.forecast-list` animation.
- Update color schemes to match CBIT branding or college colors.
- Integrate real weather API calls to replace mock data as needed.

## Notes

- The forecast carousel is implemented with pure CSS animation combined with duplicated forecast cards for seamless looping.
- Watermark is added as a fixed, transparent background to reinforce college identity without obstructing content.
