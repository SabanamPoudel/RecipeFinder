import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import RecipeGrid from '../components/RecipeGrid'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import EmptyState from '../components/EmptyState'
import { searchRecipes } from '../utils/api'

function Home() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searched, setSearched] = useState(false)
  const [currentQuery, setCurrentQuery] = useState('')

  const handleSearch = async (query) => {
    setCurrentQuery(query)
    setLoading(true)
    setError(null)
    setSearched(true)

    try {
      const results = await searchRecipes(query)
      if (results.length === 0) {
        setRecipes([])
        setError(null)
      } else {
        setRecipes(results)
      }
    } catch (err) {
      setError(err.message || 'Failed to search recipes. Please try again.')
      setRecipes([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-content">
          <h1>Discover Your Next Favorite Recipe</h1>
          <p>Search through thousands of delicious recipes from around the world</p>
        </div>
      </div>

      <div className="home-container">
        <SearchBar onSearch={handleSearch} isLoading={loading} />

        {loading && <Loader />}

        {error && !loading && <ErrorMessage message={error} />}

        {!loading && !error && searched && recipes.length === 0 && (
          <EmptyState type="noResults" />
        )}

        {!loading && !error && recipes.length > 0 && (
          <div>
            <div className="results-header">
              <h2>Results for "{currentQuery}"</h2>
              <p className="results-count">{recipes.length} recipes found</p>
            </div>
            <RecipeGrid recipes={recipes} />
          </div>
        )}

        {!searched && !loading && (
          <EmptyState type="search" />
        )}
      </div>
    </div>
  )
}

export default Home
