import { getWeatherIconUrl } from '../utils/helpers'

export default function MainWeather({
  weatherData,
  forecastData,
  onAddFavorite,
  isFavorite,
}) {
  return (
    <div className="main-weather">
      {/* Current Weather Large Display */}
      <div className="weather-main-display">
        <div className="weather-top">
          <div className="weather-content">
            <div className="temp-section">
              <div className="temperature-large">
                {weatherData.temperature}°C
              </div>
              <div className="condition-text">{weatherData.description}</div>
              <div className="location-full">
                {weatherData.city}, {weatherData.country}
              </div>
              <div className="feels-like">Feels like {weatherData.feelsLike}°C</div>
            </div>

            <div className="weather-icon-large">
              <img
                src={getWeatherIconUrl(weatherData.icon)}
                alt={weatherData.condition}
                className="icon-img"
              />
            </div>
          </div>

          <button
            onClick={onAddFavorite}
            className={`favorite-star ${isFavorite ? 'active' : ''}`}
            title={isFavorite ? 'Added to favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Hourly Forecast */}
        {forecastData && forecastData.hourly && (
          <div className="hourly-forecast">
            <div className="hourly-chart">
              {forecastData.hourly.map((hour, idx) => (
                <div key={idx} className="hourly-item">
                  <div className="hourly-time">{hour.time}</div>
                  <div className="hourly-icon">
                    <img
                      src={`https://openweathermap.org/img/wn/${hour.icon}@2x.png`}
                      alt={hour.condition}
                      className="hourly-img"
                    />
                  </div>
                  <div className="hourly-temp">{hour.temp}°</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Weather Details Grid */}
      <div className="weather-details-grid">
        <div className="detail-box">
          <span className="detail-icon">💧</span>
          <div className="detail-text">
            <div className="detail-label">Humidity</div>
            <div className="detail-value">{weatherData.humidity}%</div>
          </div>
        </div>

        <div className="detail-box">
          <span className="detail-icon">💨</span>
          <div className="detail-text">
            <div className="detail-label">Wind Speed</div>
            <div className="detail-value">{weatherData.windSpeed.toFixed(1)} m/s</div>
          </div>
        </div>

        <div className="detail-box">
          <span className="detail-icon">⇅</span>
          <div className="detail-text">
            <div className="detail-label">Pressure</div>
            <div className="detail-value">{weatherData.pressure} hPa</div>
          </div>
        </div>

        <div className="detail-box">
          <span className="detail-icon">👁️</span>
          <div className="detail-text">
            <div className="detail-label">Visibility</div>
            <div className="detail-value">{(weatherData.visibility / 1000).toFixed(1)} km</div>
          </div>
        </div>

        <div className="detail-box">
          <span className="detail-icon">☁️</span>
          <div className="detail-text">
            <div className="detail-label">Clouds</div>
            <div className="detail-value">{weatherData.cloudiness}%</div>
          </div>
        </div>

        {weatherData.sunrise && (
          <div className="detail-box">
            <span className="detail-icon">🌅</span>
            <div className="detail-text">
              <div className="detail-label">Sunrise</div>
              <div className="detail-value">
                {new Date(weatherData.sunrise * 1000).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          </div>
        )}

        {weatherData.sunset && (
          <div className="detail-box">
            <span className="detail-icon">🌇</span>
            <div className="detail-text">
              <div className="detail-label">Sunset</div>
              <div className="detail-value">
                {new Date(weatherData.sunset * 1000).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
