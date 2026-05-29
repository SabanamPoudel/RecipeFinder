import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getRecipeById } from '../utils/api'
import { isFavorite, toggleFavorite } from '../utils/helpers'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

function RecipeDetails() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true)
        const data = await getRecipeById(id)
        setRecipe(data)
        setIsFav(isFavorite(id))
        setError(null)
      } catch (err) {
        setError(err.message || 'Failed to load recipe details')
        setRecipe(null)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipe()
  }, [id])

  const handleFavoriteClick = () => {
    if (recipe) {
      toggleFavorite(recipe)
      setIsFav(!isFav)
    }
  }

  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error} />
  if (!recipe) return <ErrorMessage message="Recipe not found" />

  const image = recipe.image || 'https://via.placeholder.com/600x400?text=No+Image'
  const ingredients = recipe.ingredients || recipe.ingredientLines || []
  const instructions = recipe.instructions || recipe.steps || []
  const totalTime = recipe.totalTime || recipe.total_time
  const yield_ = recipe.yield || recipe.servings
  const source = recipe.source || recipe.url
  const cuisine = recipe.cuisine || 'International'
  const mealType = recipe.meal_type ? recipe.meal_type[0] : 'Recipe'

  return (
    <div className="recipe-details">
      <div className="recipe-details-container">
        <Link to="/" className="back-button">
          ← Back to Recipes
        </Link>

        <div className="recipe-details-header">
          <div className="recipe-details-image">
            <img src={image} alt={recipe.label || recipe.title || 'Recipe'} />
          </div>

          <div className="recipe-details-info">
            <h1>{recipe.label || recipe.title || 'Untitled Recipe'}</h1>
            
            <div className="recipe-meta-info">
              <div className="meta-tag">{mealType}</div>
              <div className="meta-tag">{cuisine}</div>
            </div>

            <div className="recipe-stats">
              {totalTime && (
                <div className="stat">
                  <span className="stat-icon">⏱️</span>
                  <div>
                    <p className="stat-label">Cooking Time</p>
                    <p className="stat-value">{totalTime} minutes</p>
                  </div>
                </div>
              )}
              {yield_ && (
                <div className="stat">
                  <span className="stat-icon">🍽️</span>
                  <div>
                    <p className="stat-label">Servings</p>
                    <p className="stat-value">{yield_}</p>
                  </div>
                </div>
              )}
            </div>

            <button 
              className={`favorite-btn-large ${isFav ? 'active' : ''}`}
              onClick={handleFavoriteClick}
            >
              <span className="heart">♥</span>
              {isFav ? 'Saved to Favorites' : 'Save to Favorites'}
            </button>

            {source && (
              <a 
                href={source} 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                View Original Recipe →
              </a>
            )}
          </div>
        </div>

        <div className="recipe-details-body">
          {ingredients.length > 0 && (
            <section className="ingredients-section">
              <h2>Ingredients</h2>
              <ul className="ingredients-list">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {typeof ingredient === 'string' 
                      ? ingredient 
                      : ingredient.original || ingredient.text || ingredient}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {instructions.length > 0 && (
            <section className="instructions-section">
              <h2>Instructions</h2>
              <ol className="instructions-list">
                {instructions.map((instruction, index) => (
                  <li key={index}>
                    {typeof instruction === 'string' 
                      ? instruction 
                      : instruction.display || instruction}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {!ingredients.length && !instructions.length && (
            <p className="no-data-message">
              No detailed recipe information available. {source && 'Visit the original recipe link for more details.'}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
