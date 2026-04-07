// Format temperature with degree symbol
export function formatTemperature(temp) {
  return `${temp}°C`
}

// Format wind speed
export function formatWindSpeed(speed) {
  return `${speed.toFixed(1)} m/s`
}

// Convert Unix timestamp to readable time
export function formatTime(timestamp, timezone = 0) {
  const date = new Date((timestamp + timezone) * 1000)
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

// Get weather icon URL from OpenWeatherMap
export function getWeatherIconUrl(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}@4x.png`
}

// Get weather emoji based on condition
export function getWeatherEmoji(condition) {
  const conditions = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Smoke': '💨',
    'Haze': '🌫️',
    'Dust': '💨',
    'Fog': '🌫️',
    'Sand': '🌪️',
    'Ash': '💨',
    'Squall': '🌪️',
    'Tornado': '🌪️',
  }
  return conditions[condition] || '🌤️'
}

// Format visibility in km
export function formatVisibility(visibility) {
  return `${(visibility / 1000).toFixed(1)} km`
}

// Capitalize first letter of string
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
