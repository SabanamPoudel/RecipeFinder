const FAVORITES_KEY = 'recipe_finder_favorites'

export function getFavorites() {
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY)
    return favorites ? JSON.parse(favorites) : []
  } catch (error) {
    console.error('Error reading favorites:', error)
    return []
  }
}

export function isFavorite(recipeId) {
  const favorites = getFavorites()
  return favorites.some(recipe => recipe.id === recipeId)
}

export function toggleFavorite(recipe) {
  const favorites = getFavorites()
  const index = favorites.findIndex(fav => fav.id === recipe.id)

  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push(recipe)
  }

  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  } catch (error) {
    console.error('Error saving favorites:', error)
  }
}

export function removeFavorite(recipeId) {
  const favorites = getFavorites()
  const filtered = favorites.filter(recipe => recipe.id !== recipeId)
  
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered))
  } catch (error) {
    console.error('Error removing favorite:', error)
  }
}

export function clearAllFavorites() {
  try {
    localStorage.removeItem(FAVORITES_KEY)
  } catch (error) {
    console.error('Error clearing favorites:', error)
  }
}
