import { getWeatherIconUrl, formatTemperature } from '../utils/helpers'

export default function WeatherCard({ weatherData }) {
  return (
    <div className="weather-card">
      <div className="location-info">
        <h2 className="location-name">
          {weatherData.city}, {weatherData.country}
        </h2>
      </div>

      <div className="weather-main">
        <img
          src={getWeatherIconUrl(weatherData.icon)}
          alt={weatherData.condition}
          className="weather-icon"
        />
        <div className="temperature-section">
          <div className="temperature">
            {formatTemperature(weatherData.temperature)}
          </div>
          <div className="condition">
            {weatherData.description}
          </div>
        </div>
      </div>

      <div className="temp-details">
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">
            {formatTemperature(weatherData.feelsLike)}
          </span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weatherData.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{weatherData.windSpeed.toFixed(1)} m/s</span>
        </div>
      </div>
    </div>
  )
}
