import RecipeCard from './RecipeCard'

function RecipeGrid({ recipes, onRecipeClick }) {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe}
          onClick={() => onRecipeClick(recipe.id)}
        />
      ))}
    </div>
  )
}

export default RecipeGrid
