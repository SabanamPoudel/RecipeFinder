import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RecipeGrid from '../components/RecipeGrid'
import EmptyState from '../components/EmptyState'
import { getFavorites } from '../utils/helpers'

function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const loadFavorites = () => {
      const favs = getFavorites()
      setFavorites(favs)
    }

    loadFavorites()

    window.addEventListener('storage', loadFavorites)
    return () => window.removeEventListener('storage', loadFavorites)
  }, [])

  useEffect(() => {
    const handleFocus = () => {
      const favs = getFavorites()
      setFavorites(favs)
    }

    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [])

  return (
    <div className="favorites">
      <div className="favorites-container">
        <Link to="/" className="back-button">
          ← Back to Search
        </Link>

        <div className="favorites-header">
          <h1>My Favorite Recipes</h1>
          <p>A collection of recipes you love</p>
        </div>

        {favorites.length === 0 ? (
          <EmptyState type="noFavorites" />
        ) : (
          <div>
            <div className="results-header">
              <h2>Saved Recipes</h2>
              <p className="results-count">{favorites.length} recipe{favorites.length !== 1 ? 's' : ''} saved</p>
            </div>
            <RecipeGrid recipes={favorites} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorites
