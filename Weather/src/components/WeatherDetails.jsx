import { formatVisibility, formatTime } from '../utils/helpers'

export default function WeatherDetails({ weatherData }) {
  return (
    <div className="weather-details">
      <h3 className="details-title">Additional Details</h3>

      <div className="details-grid">
        <div className="detail-card">
          <span className="detail-icon">💧</span>
          <div className="detail-content">
            <p className="detail-label">Pressure</p>
            <p className="detail-value">{weatherData.pressure} hPa</p>
          </div>
        </div>

        <div className="detail-card">
          <span className="detail-icon">👁️</span>
          <div className="detail-content">
            <p className="detail-label">Visibility</p>
            <p className="detail-value">
              {formatVisibility(weatherData.visibility)}
            </p>
          </div>
        </div>

        <div className="detail-card">
          <span className="detail-icon">☁️</span>
          <div className="detail-content">
            <p className="detail-label">Cloudiness</p>
            <p className="detail-value">{weatherData.cloudiness}%</p>
          </div>
        </div>

        {weatherData.sunrise && (
          <div className="detail-card">
            <span className="detail-icon">🌅</span>
            <div className="detail-content">
              <p className="detail-label">Sunrise</p>
              <p className="detail-value">
                {formatTime(weatherData.sunrise, weatherData.timezone)}
              </p>
            </div>
          </div>
        )}

        {weatherData.sunset && (
          <div className="detail-card">
            <span className="detail-icon">🌇</span>
            <div className="detail-content">
              <p className="detail-label">Sunset</p>
              <p className="detail-value">
                {formatTime(weatherData.sunset, weatherData.timezone)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
