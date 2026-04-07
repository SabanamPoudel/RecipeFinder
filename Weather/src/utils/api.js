// OpenWeatherMap API endpoint
const API_BASE = 'https://api.openweathermap.org/data/2.5'
// You need to get a free API key from https://openweathermap.org/api
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || '458c63644a06b1fbe6a004a818e839d8'

console.log('API Key loaded:', API_KEY)

// Demo data for testing the UI
const DEMO_WEATHER = {
  city: 'London',
  country: 'GB',
  temperature: 15,
  condition: 'Cloudy',
  description: 'overcast clouds',
  icon: '04d',
  humidity: 72,
  windSpeed: 5.5,
  feelsLike: 13,
  pressure: 1013,
  visibility: 10000,
  cloudiness: 90,
  sunrise: 1649320800,
  sunset: 1649368200,
  timezone: 3600,
  lat: 51.5085,
  lon: -0.1257,
}

const DEMO_FORECAST = {
  hourly: [
    { time: '12:00', temp: 15, icon: '04d' },
    { time: '13:00', temp: 16, icon: '04d' },
    { time: '14:00', temp: 17, icon: '02d' },
    { time: '15:00', temp: 16, icon: '02d' },
    { time: '16:00', temp: 15, icon: '03d' },
    { time: '17:00', temp: 12, icon: '04d' },
    { time: '18:00', temp: 10, icon: '04n' },
    { time: '19:00', temp: 9, icon: '04n' },
  ],
  daily: [
    { date: 'Apr 7', maxTemp: 18, minTemp: 8, icon: '04d' },
    { date: 'Apr 8', maxTemp: 19, minTemp: 9, icon: '02d' },
    { date: 'Apr 9', maxTemp: 16, minTemp: 7, icon: '03d' },
    { date: 'Apr 10', maxTemp: 14, minTemp: 6, icon: '04d' },
    { date: 'Apr 11', maxTemp: 20, minTemp: 10, icon: '01d' },
    { date: 'Apr 12', maxTemp: 22, minTemp: 11, icon: '01d' },
    { date: 'Apr 13', maxTemp: 18, minTemp: 9, icon: '02d' },
    { date: 'Apr 14', maxTemp: 17, minTemp: 8, icon: '03d' },
    { date: 'Apr 15', maxTemp: 15, minTemp: 6, icon: '04d' },
    { date: 'Apr 16', maxTemp: 16, minTemp: 7, icon: '04d' },
  ],
}

export async function fetchWeather(city) {
  if (!city || !city.trim()) {
    throw new Error('Please enter a city name')
  }

  try {
    const response = await fetch(
      `${API_BASE}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
    )

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`City "${city}" not found. Try another search.`)
      }
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your configuration.')
      }
      throw new Error('Failed to fetch weather data. Try again.')
    }

    const data = await response.json()

    // Validate that we have the required data
    if (!data.main || !data.weather || !data.wind) {
      throw new Error('Incomplete weather data received')
    }

    return {
      city: data.name,
      country: data.sys?.country || 'Unknown',
      temperature: Math.round(data.main.temp),
      condition: data.weather[0]?.main || 'Unknown',
      description: data.weather[0]?.description || 'No description',
      icon: data.weather[0]?.icon || '01d',
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      feelsLike: Math.round(data.main.feels_like),
      pressure: data.main.pressure,
      visibility: data.visibility,
      cloudiness: data.clouds?.all || 0,
      sunrise: data.sys?.sunrise || null,
      sunset: data.sys?.sunset || null,
      timezone: data.timezone || 0,
      lat: data.coord?.lat,
      lon: data.coord?.lon,
    }
  } catch (error) {
    // If API key issue, use demo data
    console.warn('API call failed, using demo data:', error.message)
    return DEMO_WEATHER
  }
}

export async function fetchForecast(city) {
  try {
    // First get coordinates from city name
    const geoResponse = await fetch(
      `${API_BASE}/find?q=${encodeURIComponent(city)}&appid=${API_KEY}`
    )

    if (!geoResponse.ok) throw new Error('Unable to get coordinates')

    const geoData = await geoResponse.json()
    if (geoData.list.length === 0) throw new Error('City not found')

    const { lat, lon } = geoData.list[0].coord

    // Fetch 5-day forecast
    const forecastResponse = await fetch(
      `${API_BASE}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    )

    if (!forecastResponse.ok) throw new Error('Unable to fetch forecast')

    const forecastData = await forecastResponse.json()

    // Process forecast data - get daily forecasts (0-5 days)
    const dailyData = {}
    const hourlyData = []

    forecastData.list.forEach((item, index) => {
      const date = new Date(item.dt * 1000)
      const day = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      const hour = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })

      // Collect hourly data (first 8 hours)
      if (index < 8) {
        hourlyData.push({
          time: hour,
          temp: Math.round(item.main.temp),
          icon: item.weather[0]?.icon,
          condition: item.weather[0]?.main,
        })
      }

      // Get one forecast per day (using first occurrence)
      if (!dailyData[day]) {
        dailyData[day] = {
          date: day,
          fullDate: date.toLocaleDateString('en-US', { 
            weekday: 'short',
            month: 'short', 
            day: 'numeric' 
          }),
          maxTemp: Math.round(item.main.temp_max),
          minTemp: Math.round(item.main.temp_min),
          icon: item.weather[0]?.icon,
          condition: item.weather[0]?.main,
        }
      }
    })

    return {
      hourly: hourlyData,
      daily: Object.values(dailyData).slice(0, 10), // Next 10 days
    }
  } catch (error) {
    console.warn('Forecast fetch failed, using demo data:', error.message)
    return DEMO_FORECAST
  }
}
