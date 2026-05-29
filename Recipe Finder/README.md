# 🍳 Recipe Finder App

A modern, responsive recipe search application built with React, Vite, and React Router. Discover recipes from around the world, view detailed instructions, and save your favorites locally.

## 📋 Features

- **🔍 Recipe Search**: Search for recipes by keyword with real-time results
- **📇 Recipe Cards**: Beautiful responsive grid displaying recipe cards with images, cuisine type, and servings
- **📖 Recipe Details**: Comprehensive detail page with ingredients, step-by-step instructions, cooking time, and servings
- **❤️ Favorites**: Save your favorite recipes and access them instantly
- **💾 Persistent Storage**: Favorites are saved to browser localStorage and persisted between sessions
- **📱 Responsive Design**: Fully responsive layout that works beautifully on mobile, tablet, and desktop
- **⚡ Loading States**: Smooth loading indicators while fetching recipes
- **⚠️ Error Handling**: User-friendly error messages and empty states
- **🎨 Modern UI**: Clean, food-app style design with smooth animations and transitions

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Lightning-fast build tool and dev server
- **React Router 6**: Client-side routing for navigation
- **CSS 3**: Custom CSS with CSS Grid and Flexbox
- **Edamam API**: Free recipe API for searching recipes
- **localStorage**: Browser API for storing favorites

## 📦 Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd recipe-finder
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up API keys (Optional - Demo mode works without this)

#### Option A: Using Edamam API (Recommended)
1. Sign up for free at https://developer.edamam.com
2. Create a new application to get your API_ID and API_KEY
3. Copy .env.example to .env.local:
   ```bash
   cp .env.example .env.local
   ```
4. Add your credentials to .env.local:
   ```
   VITE_EDAMAM_API_ID=your_api_id_here
   VITE_EDAMAM_API_KEY=your_api_key_here
   ```

#### Option B: Demo Mode (No API Setup Required)
The app includes sample recipes and works without API keys. Just run it locally!

### 4. Start the development server
```bash
npm run dev
```

The app will open in your browser at http://localhost:5173

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📁 Project Structure

```
recipe-finder/
├── src/
│   ├── components/           # Reusable components
│   │   ├── Header.jsx        # App header with navigation
│   │   ├── SearchBar.jsx     # Search input component
│   │   ├── RecipeGrid.jsx    # Grid layout for recipe cards
│   │   ├── RecipeCard.jsx    # Individual recipe card
│   │   ├── Loader.jsx        # Loading spinner
│   │   ├── ErrorMessage.jsx  # Error display component
│   │   └── EmptyState.jsx    # Empty state messages
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Home page with search
│   │   ├── RecipeDetails.jsx # Recipe detail page
│   │   └── Favorites.jsx     # Favorites page
│   ├── utils/                # Utility functions
│   │   ├── api.js            # API calls and data fetching
│   │   └── helpers.js        # localStorage and helper functions
│   ├── styles/               # CSS files
│   │   └── app.css           # Main styles
│   ├── App.jsx               # Main app with routes
│   └── main.jsx              # React DOM entry point
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
├── .env.example              # Environment variables template
└── README.md                 # This file
```

## 🎯 How to Use

### Searching for Recipes
1. On the home page, type a recipe keyword in the search bar
2. Click "Search" or press Enter
3. Browse the recipe cards in the grid

### Viewing Recipe Details
1. Click on any recipe card
2. See ingredients, instructions, cooking time, and servings
3. View the source link to access the original recipe

### Saving Favorites
1. Click the heart icon on any recipe card
2. Or save from the recipe detail page
3. Favorites persist between sessions

### Accessing Favorites
1. Click "Favorites" in navigation
2. View all your saved recipes
3. Click any favorite to view details

## 💡 How It Works

### 🔍 Search Functionality
- User enters search query
- App prevents empty searches
- API fetches matching recipes
- Results display in responsive grid
- Loading spinner shows while fetching
- Error messages for failures

### 🧭 Routing System
- "/" → Home (search)
- "/recipe/:id" → Recipe details
- "/favorites" → Saved recipes

### ❤️ Favorites System
- Click heart to add/remove from favorites
- Uses browser localStorage
- Prevents duplicate recipes
- Syncs across tabs

### 💾 localStorage Implementation

**Storage Key**: `recipe_finder_favorites`

Stores favorite recipes as JSON array and persists between sessions.

**Helper Functions**:
- `getFavorites()`: Retrieve all favorites
- `isFavorite(id)`: Check if recipe is favorited
- `toggleFavorite(recipe)`: Add or remove
- `removeFavorite(id)`: Remove specific
- `clearAllFavorites()`: Clear all

### ⚡ Loading & Error States

**Loading State**:
- Spinner animates while fetching
- Search button disabled to prevent duplicates
- Visual feedback about loading

**Error Handling**:
- Network errors show friendly messages
- Missing data handled gracefully
- Image fallbacks for missing images

### 📱 Responsive Design

- Desktop: 4-5 recipe cards per row
- Tablet: 2-3 recipe cards per row
- Mobile: 1 recipe card per row
- Adaptive navigation and headers

## 🎨 Design Highlights

- Modern color scheme (red #ff6b6b, yellow #ffd93d)
- Clean typography with system fonts
- Consistent spacing and margins
- Subtle shadows for depth
- Smooth animations and transitions

## 🔧 Customization

### Change Colors
Edit CSS variables in `src/styles/app.css`:
```css
:root {
  --primary-color: #ff6b6b;
  --accent-color: #ffd93d;
}
```

### Modify API
Edit `src/utils/api.js` to use a different recipe API.

### Add Features
1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Link from header or other components

## 🚀 Future Improvements

- Advanced filters (diet, health, cuisine)
- Recipe collections
- Ratings and reviews
- Social sharing
- Offline mode with service workers
- Dark mode
- Shopping lists
- User accounts
- AI recommendations

## 📖 API Reference

### Edamam Recipe API
- Docs: https://developer.edamam.com/
- Free tier: 10,000 requests/month
- Rate limit: 100 requests/minute

## 🐛 Troubleshooting

### Recipes not loading?
1. Check internet connection
2. Verify API keys in .env.local
3. Check browser console
4. Try demo mode

### Favorites not persisting?
1. Check if localStorage enabled
2. Clear browser cache
3. Check console for errors

## 📄 License

MIT License - feel free to use in your projects!

## 🤝 Contributing

Contributions welcome! Submit issues and pull requests.

---

**Built with ❤️ using React & Vite**

Happy cooking! 🍳
