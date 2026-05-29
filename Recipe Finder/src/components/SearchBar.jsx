import { useState } from 'react'

function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for recipes... (e.g., pasta, cookies, pizza)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="search-btn"
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  )
}

export default SearchBar
