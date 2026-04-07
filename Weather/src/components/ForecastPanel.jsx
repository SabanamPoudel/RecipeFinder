export default function ForecastPanel({ forecastData }) {
  if (!forecastData || !forecastData.daily) return null

  return (
    <aside className="forecast-panel">
      <h3 className="forecast-title">10-Day Forecast</h3>

      <div className="forecast-list">
        {forecastData.daily.map((day, idx) => (
          <div key={idx} className="forecast-item">
            <div className="forecast-date">{day.fullDate}</div>

            <div className="forecast-details">
              <div className="forecast-temps">
                <span className="temp-max">{day.maxTemp}°</span>
                <span className="temp-min">{day.minTemp}°</span>
              </div>

              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.condition}
                className="forecast-icon"
              />
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
