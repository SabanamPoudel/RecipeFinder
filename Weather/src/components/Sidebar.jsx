import { useState } from 'react'

export default function Sidebar({
  favorites,
  recentSearches,
  selectedCity,
  onSelectCity,
  onRemoveFavorite,
  searchQuery,
  setSearchQuery,
  onSearch,
}) {
  const [showAddNew, setShowAddNew] = useState(false)
  const [newCity, setNewCity] = useState('')

  const handleAddNew = () => {
    if (newCity.trim()) {
      onSearch(newCity)
      setNewCity('')
      setShowAddNew(false)
    }
  }

  return (
    <aside className="sidebar">
      {/* App Title */}
      <div className="sidebar-header">
        <h1 className="sidebar-title">🌤️ Weather App</h1>
      </div>

      {/* Location Selector */}
      {selectedCity && (
        <div className="current-location">
          <div className="location-display">
            <span className="location-icon">📍</span>
            <div className="location-info">
              <div className="location-name">{selectedCity}</div>
            </div>
            <span className="check-icon">✓</span>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="sidebar-search">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search city..."
          className="sidebar-search-input"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSearch(searchQuery)
            }
          }}
        />
      </div>

      {/* Favorites Section */}
      <div className="sidebar-section">
        <div className="section-header">
          <h3>❤️ My Favorites</h3>
        </div>

        {favorites.length > 0 ? (
          <ul className="favorites-list">
            {favorites.map((city) => (
              <li key={city} className="favorite-item">
                <button
                  onClick={() => onSelectCity(city)}
                  className={`favorite-button ${
                    selectedCity === city ? 'active' : ''
                  }`}
                >
                  <span className="favorite-name">{city}</span>
                </button>
                <button
                  onClick={() => onRemoveFavorite(city)}
                  className="remove-btn"
                  title="Remove from favorites"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-message">No favorites yet</p>
        )}
      </div>

      {/* Add New */}
      {!showAddNew ? (
        <button
          onClick={() => setShowAddNew(true)}
          className="add-new-btn"
        >
          + Add New
        </button>
      ) : (
        <div className="add-new-form">
          <input
            type="text"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
            placeholder="Enter city name..."
            className="add-new-input"
            autoFocus
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleAddNew()
            }}
          />
          <div className="add-new-buttons">
            <button onClick={handleAddNew} className="btn-confirm">
              ✓
            </button>
            <button
              onClick={() => {
                setShowAddNew(false)
                setNewCity('')
              }}
              className="btn-cancel"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="sidebar-footer">
        <p>© 2026 Weather App</p>
        <p className="subtitle">Powered by OpenWeatherMap</p>
      </div>
    </aside>
  )
}
