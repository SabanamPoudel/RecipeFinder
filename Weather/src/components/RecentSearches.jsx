export default function RecentSearches({ searches, onSelectSearch }) {
  if (searches.length === 0) {
    return null
  }

  return (
    <div className="recent-searches">
      <p className="recent-searches-label">Recent Searches</p>
      <div className="recent-searches-list">
        {searches.map((city, index) => (
          <button
            key={index}
            onClick={() => onSelectSearch(city)}
            className="search-chip"
            title={`Search for ${city}`}
          >
            📍 {city}
          </button>
        ))}
      </div>
    </div>
  )
}
