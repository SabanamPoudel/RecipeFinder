import { useState, useEffect } from 'react'
import { fetchWeather, fetchForecast } from './utils/api'
import Sidebar from './components/Sidebar'
import MainWeather from './components/MainWeather'
import ForecastPanel from './components/ForecastPanel'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import './styles/weather.css'

export default function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [recentSearches, setRecentSearches] = useState([])
  const [favorites, setFavorites] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)

  // Load favorites and recent searches on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites')
    const savedSearches = localStorage.getItem('recentSearches')
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches))
    }
  }, [])

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  // Save recent searches to localStorage
  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
  }, [recentSearches])

  // Fetch weather and forecast data
  const handleSearch = async (city) => {
    if (!city.trim()) {
      setError('Please enter a city name')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const weather = await fetchWeather(city)
      setWeatherData(weather)
      setSelectedCity(weather.city)
      setSearchQuery('')

      // Fetch forecast
      try {
        const forecast = await fetchForecast(city)
        setForecastData(forecast)
      } catch (forecastErr) {
        console.warn('Forecast not available:', forecastErr.message)
      }

      // Add to recent searches
      setRecentSearches((prev) => {
        const filtered = prev.filter((s) => s.toLowerCase() !== city.toLowerCase())
        return [city, ...filtered].slice(0, 6)
      })
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
      setForecastData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleAddFavorite = () => {
    if (weatherData && !favorites.includes(weatherData.city)) {
      setFavorites([...favorites, weatherData.city])
    }
  }

  const handleRemoveFavorite = (city) => {
    setFavorites(favorites.filter((fav) => fav !== city))
  }

  const handleSelectCity = (city) => {
    handleSearch(city)
  }

  return (
    <div className="dashboard">
      {loading && <Loader />}

      {!loading && (
        <>
          <Sidebar
            favorites={favorites}
            recentSearches={recentSearches}
            selectedCity={selectedCity}
            onSelectCity={handleSelectCity}
            onRemoveFavorite={handleRemoveFavorite}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
          />

          <main className="dashboard-main">
            {error && <ErrorMessage message={error} />}

            {weatherData ? (
              <>
                <MainWeather
                  weatherData={weatherData}
                  forecastData={forecastData}
                  onAddFavorite={handleAddFavorite}
                  isFavorite={favorites.includes(weatherData.city)}
                />

                {forecastData && (
                  <ForecastPanel forecastData={forecastData} />
                )}
              </>
            ) : (
              <div className="empty-dashboard">
                <h2>Welcome to Weather App</h2>
                <p>Search for a city to get started</p>
              </div>
            )}
          </main>
        </>
      )}
    </div>
  )
}
