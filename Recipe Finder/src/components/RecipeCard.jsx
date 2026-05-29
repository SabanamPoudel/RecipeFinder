import { Link } from 'react-router-dom'
import { useState } from 'react'
import { isFavorite, toggleFavorite } from '../utils/helpers'

function RecipeCard({ recipe }) {
  const [isFav, setIsFav] = useState(isFavorite(recipe.id))

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    toggleFavorite(recipe)
    setIsFav(!isFav)
  }

  const image = recipe.image || 'https://via.placeholder.com/300x200?text=No+Image'
  const cuisine = recipe.cuisine || 'Mixed'
  const mealType = recipe.meal_type ? recipe.meal_type[0] : 'Recipe'

  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card-link">
      <div className="recipe-card">
        <div className="recipe-card-image">
          <img 
            src={image} 
            alt={recipe.label || recipe.title || 'Recipe'}
            loading="lazy"
          />
          <button 
            className={`favorite-btn ${isFav ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            title={isFav ? 'Remove from favorites' : 'Add to favorites'}
          >
            ♥
          </button>
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-card-title">
            {recipe.label || recipe.title || 'Untitled Recipe'}
          </h3>
          <div className="recipe-card-meta">
            <span className="recipe-type">{mealType}</span>
            <span className="recipe-cuisine">{cuisine}</span>
          </div>
          {recipe.yield && (
            <p className="recipe-servings">Servings: {recipe.yield}</p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
