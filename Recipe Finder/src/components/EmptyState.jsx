function EmptyState({ type = 'search' }) {
  const messages = {
    search: {
      icon: '🔍',
      title: 'Start Your Culinary Journey',
      description: 'Search for a recipe to discover delicious dishes from around the world. Try searching for ingredients like "pasta", "chicken", or "chocolate".'
    },
    noResults: {
      icon: '🍽️',
      title: 'No Recipes Found',
      description: 'We couldn\'t find recipes matching your search. Try a different keyword or search for a more common ingredient.'
    },
    noFavorites: {
      icon: '♥',
      title: 'No Favorite Recipes Yet',
      description: 'Start adding recipes to your favorites by clicking the heart icon on any recipe card.'
    }
  }

  const content = messages[type] || messages.search

  return (
    <div className="empty-state">
      <div className="empty-state-icon">{content.icon}</div>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </div>
  )
}

export default EmptyState
