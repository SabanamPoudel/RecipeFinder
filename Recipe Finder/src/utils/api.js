// Using Edamam Recipe Search API (free tier)
// Sign up at: https://developer.edamam.com/

const API_ID = import.meta.env.VITE_EDAMAM_API_ID || 'demo'
const API_KEY = import.meta.env.VITE_EDAMAM_API_KEY || 'demo'
const API_BASE_URL = 'https://api.edamam.com/api/recipes/v2'

// Fallback recipes for demo purposes if API keys are not set
const DEMO_RECIPES = [
  {
    id: '1',
    label: '🍝 Spaghetti Carbonara',
    title: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=400&fit=crop',
    cuisine: 'Italian',
    meal_type: ['Lunch/Dinner'],
    yield: 4,
    totalTime: 30,
    ingredients: ['400g spaghetti', '200g pancetta', '4 eggs', 'Parmesan cheese', 'Black pepper'],
    steps: ['Cook pasta', 'Fry pancetta', 'Mix eggs', 'Combine all ingredients'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '2',
    label: '🍪 Chocolate Chip Cookies',
    title: 'Chocolate Chip Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=400&fit=crop',
    cuisine: 'American',
    meal_type: ['Dessert'],
    yield: 24,
    totalTime: 25,
    ingredients: ['2 cups flour', 'Butter', 'Brown sugar', 'Eggs', 'Vanilla', 'Chocolate chips'],
    steps: ['Mix butter and sugar', 'Add eggs', 'Combine dry ingredients', 'Add chocolate chips', 'Bake'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '3',
    label: '🍛 Chicken Tikka Masala',
    title: 'Chicken Tikka Masala',
    image: '/tikka-masala.jpg',
    cuisine: 'Indian',
    meal_type: ['Lunch/Dinner'],
    yield: 4,
    totalTime: 45,
    ingredients: ['Chicken breast', 'Yogurt', 'Tikka paste', 'Coconut milk', 'Tomatoes', 'Spices'],
    steps: ['Marinate chicken', 'Cook chicken', 'Prepare sauce', 'Combine', 'Simmer'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '4',
    label: '🍕 Margherita Pizza',
    title: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=400&fit=crop',
    cuisine: 'Italian',
    meal_type: ['Lunch/Dinner'],
    yield: 2,
    totalTime: 20,
    ingredients: ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella', 'Basil', 'Olive oil'],
    steps: ['Prepare dough', 'Add sauce', 'Add cheese', 'Bake', 'Add basil'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '5',
    label: '🥗 Caesar Salad',
    title: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
    cuisine: 'American',
    meal_type: ['Lunch'],
    yield: 2,
    totalTime: 15,
    ingredients: ['Romaine lettuce', 'Parmesan cheese', 'Croutons', 'Caesar dressing', 'Chicken'],
    steps: ['Chop lettuce', 'Add toppings', 'Drizzle dressing', 'Toss', 'Serve'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '6',
    label: '🐟 Grilled Salmon',
    title: 'Grilled Salmon Fillet',
    image: 'https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=500&h=400&fit=crop',
    cuisine: 'Seafood',
    meal_type: ['Lunch/Dinner'],
    yield: 2,
    totalTime: 25,
    ingredients: ['Salmon fillet', 'Lemon', 'Garlic', 'Olive oil', 'Herbs'],
    steps: ['Season salmon', 'Preheat grill', 'Grill salmon', 'Add toppings', 'Serve hot'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '7',
    label: '🥞 Fluffy Pancakes',
    title: 'Fluffy Pancakes',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=400&fit=crop',
    cuisine: 'American',
    meal_type: ['Breakfast'],
    yield: 4,
    totalTime: 20,
    ingredients: ['Flour', 'Eggs', 'Milk', 'Baking powder', 'Butter', 'Maple syrup'],
    steps: ['Mix batter', 'Heat griddle', 'Pour batter', 'Cook until golden', 'Serve with toppings'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '8',
    label: '🌮 Beef Tacos',
    title: 'Beef Tacos',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=400&fit=crop',
    cuisine: 'Mexican',
    meal_type: ['Lunch/Dinner'],
    yield: 4,
    totalTime: 30,
    ingredients: ['Ground beef', 'Taco shells', 'Lettuce', 'Tomato', 'Cheese', 'Sour cream'],
    steps: ['Brown beef', 'Season meat', 'Warm shells', 'Fill shells', 'Add toppings'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '9',
    label: '🥟 Momo (Nepali Dumplings)',
    title: 'Momos - Nepali Dumplings',
    image: '/momo.jpg',
    cuisine: 'Nepali',
    meal_type: ['Appetizer', 'Snack'],
    yield: 4,
    totalTime: 45,
    ingredients: ['All-purpose flour', 'Ground beef/chicken', 'Onion', 'Ginger', 'Garlic', 'Coriander', 'Cumin', 'Salt'],
    steps: ['Prepare dough', 'Mix filling ingredients', 'Fold dumplings', 'Steam momos', 'Serve with achaar'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '10',
    label: '🍚 Dal Bhat (Nepali)',
    title: 'Dal Bhat - Nepali Rice & Lentils',
    image: '/dal-bhat.jpg',
    cuisine: 'Nepali',
    meal_type: ['Lunch/Dinner'],
    yield: 2,
    totalTime: 40,
    ingredients: ['Red lentils', 'White rice', 'Onion', 'Garlic', 'Turmeric', 'Cumin', 'Oil', 'Salt'],
    steps: ['Cook lentils', 'Prepare rice', 'Temper with oil & spices', 'Cook vegetables', 'Mix and serve'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '11',
    label: '🍜 Chow Mein',
    title: 'Chow Mein - Stir-Fried Noodles',
    image: '/chow-mein.jpg',
    cuisine: 'Asian',
    meal_type: ['Lunch/Dinner'],
    yield: 2,
    totalTime: 20,
    ingredients: ['Egg noodles', 'Vegetables', 'Soy sauce', 'Garlic', 'Ginger', 'Sesame oil'],
    steps: ['Cook noodles', 'Prepare vegetables', 'Stir-fry noodles', 'Add vegetables', 'Season and serve'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '12',
    label: '🍔 Gourmet Burger',
    title: 'Gourmet Cheeseburger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop',
    cuisine: 'American',
    meal_type: ['Lunch/Dinner'],
    yield: 2,
    totalTime: 25,
    ingredients: ['Ground beef', 'Burger buns', 'Cheese', 'Lettuce', 'Tomato', 'Onion', 'Condiments'],
    steps: ['Form patties', 'Season beef', 'Grill patties', 'Toast buns', 'Assemble burger'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '13',
    label: '🍕 Pepperoni Pizza',
    title: 'Pepperoni Pizza',
    image: '/pepperoni-pizza.jpeg',
    cuisine: 'Italian',
    meal_type: ['Lunch/Dinner'],
    yield: 2,
    totalTime: 25,
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Pepperoni', 'Oregano', 'Olive oil'],
    steps: ['Prepare dough', 'Add sauce', 'Add cheese', 'Add pepperoni', 'Bake until crispy'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '14',
    label: '🍚 Chicken Biryani',
    title: 'Chicken Biryani',
    image: '/biryani.jpg',
    cuisine: 'Indian',
    meal_type: ['Lunch/Dinner'],
    yield: 4,
    totalTime: 60,
    ingredients: ['Basmati rice', 'Chicken', 'Yogurt', 'Biryani masala', 'Onions', 'Mint', 'Saffron'],
    steps: ['Marinate chicken', 'Cook rice', 'Layer ingredients', 'Steam together', 'Serve hot'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '15',
    label: '🍜 Japanese Ramen',
    title: 'Japanese Ramen',
    image: '/ramen.jpg',
    cuisine: 'Japanese',
    meal_type: ['Lunch/Dinner'],
    yield: 2,
    totalTime: 35,
    ingredients: ['Ramen noodles', 'Broth', 'Egg', 'Pork', 'Nori', 'Bamboo shoots', 'Green onion'],
    steps: ['Prepare broth', 'Cook noodles', 'Add toppings', 'Soft boil egg', 'Serve hot'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '16',
    label: '🥙 Falafel Wrap',
    title: 'Falafel Wrap',
    image: '/falafel.avif',
    cuisine: 'Middle Eastern',
    meal_type: ['Lunch'],
    yield: 2,
    totalTime: 30,
    ingredients: ['Chickpeas', 'Flour', 'Spices', 'Pita bread', 'Tahini sauce', 'Vegetables'],
    steps: ['Prepare falafel mixture', 'Fry falafels', 'Warm pita', 'Add sauce', 'Wrap and serve'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '17',
    label: '🍲 Pad Thai',
    title: 'Pad Thai - Thai Stir Fry',
    image: '/pad-thai.jpg',
    cuisine: 'Thai',
    meal_type: ['Lunch/Dinner'],
    yield: 2,
    totalTime: 20,
    ingredients: ['Rice noodles', 'Shrimp', 'Eggs', 'Tofu', 'Peanuts', 'Lime', 'Fish sauce'],
    steps: ['Cook noodles', 'Prepare sauce', 'Stir-fry ingredients', 'Add noodles', 'Serve with lime'],
    source: 'https://example.com',
    url: 'https://example.com'
  },
  {
    id: '18',
    label: '🌯 Greek Gyro',
    title: 'Greek Gyro Sandwich',
    image: '/gyro.jpg',
    cuisine: 'Greek',
    meal_type: ['Lunch'],
    yield: 2,
    totalTime: 30,
    ingredients: ['Pita bread', 'Gyro meat', 'Tzatziki sauce', 'Tomato', 'Onion', 'Lettuce'],
    steps: ['Cook gyro meat', 'Warm pita', 'Add sauce', 'Add meat and vegetables', 'Wrap and serve'],
    source: 'https://example.com',
    url: 'https://example.com'
  }
]

export async function searchRecipes(query) {
  try {
    // If using demo keys, filter and return relevant demo recipes
    if (API_ID === 'demo' || API_KEY === 'demo') {
      const lowerQuery = query.toLowerCase().trim()
      
      // Split query into individual words for flexible matching
      const queryWords = lowerQuery.split(' ').filter(word => word.length > 0)
      
      return DEMO_RECIPES.filter(recipe => {
        const label = recipe.label.toLowerCase()
        const title = recipe.title.toLowerCase()
        const ingredients = recipe.ingredients.join(' ').toLowerCase()
        const cuisine = recipe.cuisine.toLowerCase()
        const mealType = (recipe.meal_type || []).join(' ').toLowerCase()
        
        // Check if ANY word in query matches ANY field
        return queryWords.some(word => 
          label.includes(word) || 
          title.includes(word) || 
          ingredients.includes(word) || 
          cuisine.includes(word) || 
          mealType.includes(word)
        )
      })
    }

    const params = new URLSearchParams({
      type: 'public',
      q: query,
      app_id: API_ID,
      app_key: API_KEY,
      to: 20
    })

    const response = await fetch(`${API_BASE_URL}?${params}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch recipes. Please try again.')
    }

    const data = await response.json()
    
    if (!data.hits || data.hits.length === 0) {
      return []
    }

    return data.hits.map((hit) => ({
      id: hit.recipe.uri?.split('#')[1] || Math.random().toString(),
      label: hit.recipe.label,
      title: hit.recipe.label,
      image: hit.recipe.image,
      cuisine: hit.recipe.cuisineType?.[0] || 'Mixed',
      meal_type: hit.recipe.mealType || [],
      yield: hit.recipe.yield,
      totalTime: hit.recipe.totalTime,
      ingredients: hit.recipe.ingredientLines || [],
      steps: [],
      source: hit.recipe.source,
      url: hit.recipe.url,
      ...hit.recipe
    }))
  } catch (error) {
    console.error('API Error:', error)
    throw new Error('Unable to search recipes. Please check your internet connection.')
  }
}

export async function getRecipeById(id) {
  try {
    // For demo purposes, return a demo recipe
    if (API_ID === 'demo' || API_KEY === 'demo') {
      const demoRecipe = DEMO_RECIPES.find(r => r.id === id)
      if (demoRecipe) {
        return demoRecipe
      }
      return DEMO_RECIPES[0]
    }

    const response = await fetch(
      `${API_BASE_URL}/${id}?type=public&app_id=${API_ID}&app_key=${API_KEY}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch recipe details')
    }

    const data = await response.json()
    const recipe = data.recipe || data

    return {
      id: recipe.uri?.split('#')[1] || id,
      label: recipe.label,
      title: recipe.label,
      image: recipe.image,
      cuisine: recipe.cuisineType?.[0] || 'Mixed',
      meal_type: recipe.mealType || [],
      yield: recipe.yield,
      totalTime: recipe.totalTime,
      ingredients: recipe.ingredientLines || [],
      steps: recipe.instructions || [],
      source: recipe.source,
      url: recipe.url,
      ...recipe
    }
  } catch (error) {
    console.error('Error fetching recipe:', error)
    throw new Error('Could not load recipe details. Please try again.')
  }
}
