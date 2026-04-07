# ⚡ Quick Reference Card

## 🚀 5-Minute Startup

```bash
# 1. Navigate to project
cd /Users/sabanampoudel/Desktop/Weather

# 2. Install dependencies
npm install

# 3. Copy environment template
cp .env.local.example .env.local

# 4. Open .env.local and add your API key
# Get key at: https://openweathermap.org/api
VITE_WEATHER_API_KEY=your_key_here

# 5. Start development server
npm run dev
# Opens http://localhost:3000

# 6. Build for production
npm run build

# 7. Preview production build
npm run preview
```

---

## 📁 File Location Cheat Sheet

| What                    | File Path                      | Lines |
|-------------------------|--------------------------------|-------|
| Main app logic          | src/App.jsx                    | 110   |
| Search form             | src/components/WeatherSearch   | 35    |
| Weather display         | src/components/WeatherCard     | 40    |
| Details section         | src/components/WeatherDetails  | 50    |
| Recent searches         | src/components/RecentSearches  | 25    |
| API calls               | src/utils/api.js               | 65    |
| Formatting helpers      | src/utils/helpers.js           | 60    |
| Global CSS              | src/styles/app.css             | 180   |
| Component CSS           | src/styles/weather.css         | 400   |
| HTML entry              | index.html                     | 20    |
| Build config            | vite.config.js                 | 14    |
| Dependencies            | package.json                   | 30    |

---

## 🎯 State Summary

```javascript
// In App.jsx
const [weatherData, setWeatherData] = useState(null)     // API response
const [loading, setLoading] = useState(false)            // Fetching?
const [error, setError] = useState(null)                 // Error message
const [searchQuery, setSearchQuery] = useState('')       // User input
const [recentSearches, setRecentSearches] = useState([]) // History
```

---

## 🔑 Key Functions

```javascript
// App.jsx - handles search
handleSearch(city) {
  setLoading(true)
  await fetchWeather(city)
  setWeatherData(data)
  Add to recent searches
}

// api.js - fetches weather
fetchWeather(city) {
  fetch('https://api.openweathermap.org/...')
  return formatted { city, temp, humidity, ... }
}

// helpers.js - formatting
formatTemperature(15) → "15°C"
formatTime(1648123456) → "10:30 AM"
getWeatherIconUrl("04d") → "https://..."
```

---

## 🎨 CSS Classes

```css
/* Main containers */
.app-container          /* Whole app wrapper */
.app-header            /* Title section */
.app-main              /* Content area */
.app-footer            /* Footer */

/* Search */
.search-container      /* Search wrapper */
.search-input          /* Input field */
.search-button         /* Search button */

/* Results */
.weather-card          /* Main weather card */
.weather-icon          /* Weather image */
.temperature           /* Large temperature */
.weather-details       /* Additional details */
.detail-card           /* Individual detail */

/* States */
.loader-container      /* Loading spinner */
.error-message         /* Error box */
.empty-state           /* Empty message */

/* Recent searches */
.recent-searches       /* Recent section */
.search-chip           /* Individual chip */
```

---

## 🖥️ Component Props

```javascript
// WeatherSearch
<WeatherSearch 
  searchQuery={string}
  setSearchQuery={function}
  onSearch={function}
/>

// WeatherCard
<WeatherCard weatherData={object} />
// Expects: { city, temperature, condition, humidity, windSpeed, ... }

// WeatherDetails
<WeatherDetails weatherData={object} />

// RecentSearches
<RecentSearches 
  searches={array} 
  onSelectSearch={function} 
/>

// Loader, ErrorMessage, EmptyState
<Loader />
<ErrorMessage message={string} />
<EmptyState />
```

---

## API Reference

```javascript
// Request
fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=KEY')

// Response object
{
  name: "Paris",
  sys: { country: "FR", sunrise: 1648..., sunset: 1648... },
  weather: [{ main: "Clouds", description: "...", icon: "04d" }],
  main: { temp: 15, feels_like: 14, humidity: 72, pressure: 1013 },
  wind: { speed: 3.5 },
  clouds: { all: 80 },
  visibility: 10000
}
```

---

## 🌐 Environment Variables

```env
# .env.local file
VITE_WEATHER_API_KEY=your_api_key_here

# Access in code
import.meta.env.VITE_WEATHER_API_KEY
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop (default) */
/* No media query needed */

/* Tablet */
@media (max-width: 1024px) { ... }

/* Mobile */
@media (max-width: 640px) { ... }

/* Small Mobile */
@media (max-width: 380px) { ... }
```

---

## 🐛 Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| "Module not found" | Run `npm install` |
| Blank page | Check browser console (F12) for errors |
| API key error | Check `.env.local` has correct key |
| Recent searches not saving | Check localStorage not disabled in browser |
| Styling broken | Clear browser cache, hard refresh (Ctrl+Shift+R) |
| Can't find localhost | Wait for dev server startup, check console |
| "City not found" for valid cities | Check API key is activated at openweathermap.org |

---

## 🚢 Deployment Options

```bash
# Vercel (Recommended)
npm install -g vercel
vercel
# Set environment variable in dashboard

# Netlify
# Push to GitHub, connect repo, add env variable

# GitHub Pages
npm run build
# Deploy dist/ folder
```

---

## 🔒 Never Commit These Files

```
.env.local              ← Contains your API key!
node_modules/           ← Downloaded packages
dist/                   ← Built files
.DS_Store               ← Mac system files
*.log                   ← Log files
```

**These are in `.gitignore` already!** ✅

---

## 📊 Performance Targets

```
First Load:      < 2s
Search Response: < 1s
Animations:      60fps
Bundle Size:     ~50KB gzipped
```

---

## 🔨 npm Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 📚 Documentation Files

```
README.md                  ← Start here! Complete guide
IMPLEMENTATION_GUIDE.md    ← How everything works
ARCHITECTURE.md            ← Visual diagrams & flows
PORTFOLIO_MATERIALS.md     ← Resume & GitHub content
PROJECT_SUMMARY.md         ← Complete reference
QUICK_REFERENCE.md         ← This file!
```

---

## ✅ Pre-Launch Checklist

```
□ npm install ran successfully
□ .env.local created with API key
□ npm run dev works
□ Can search for cities
□ Error message shows for invalid cities
□ Recent searches appear
□ Page refresh keeps recent searches
□ Mobile view looks good
□ No console errors
□ Ready to deploy!
```

---

## 🎯 Most Important Files (Priority Order)

1. **App.jsx** ← Read this first (core logic)
2. **api.js** ← Then this (API integration)
3. **WeatherCard.jsx** ← Then this (simple component)
4. **app.css** ← Then this (styling approach)
5. Everything else ← Then explore

---

## 💬 Key Concepts in One Line Each

| Concept | Explanation |
|---------|------------|
| React | UI library that re-renders when state changes |
| Hooks | Functions like useState that let functional components use state |
| Component | Reusable piece of UI (function returning JSX) |
| Props | Data passed from parent to child component |
| State | Data that can change and trigger re-renders |
| Effect | Code that runs when component mounts or state changes |
| API | Remote server that returns data (weather in our case) |
| localStorage | Browser's persistent storage for user data |
| Fetch | Browser API to make HTTP requests |
| JSX | HTML-like syntax inside JavaScript |

---

## 🎓 Learn By Doing

**Modify the app to learn:**

### Easy (30 minutes)
- [ ] Change header title color
- [ ] Change search button color
- [ ] Add emoji to empty state
- [ ] Change recent searches limit from 6 to 10
- [ ] Format temperature to show 2 decimal places

### Medium (1 hour)
- [ ] Add a refresh button to fetch current weather again
- [ ] Add "Clear Recent Searches" button
- [ ] Show more weather information (e.g., UV index)
- [ ] Add a loading skeleton or different loading UI
- [ ] Change CSS to dark theme

### Hard (2+ hours)
- [ ] Add 5-day forecast section
- [ ] Add geolocation auto-detect
- [ ] Add Celsius/Fahrenheit toggle
- [ ] Add search city autocomplete
- [ ] Deploy to Vercel/Netlify

---

## 🎬 Next Steps

1. **Step 1**: Follow "5-Minute Startup" above
2. **Step 2**: Search for a city and explore the app
3. **Step 3**: Read README.md for full understanding
4. **Step 4**: Browse the code files
5. **Step 5**: Try modifying something small
6. **Step 6**: Deploy to Vercel
7. **Step 7**: Share with portfolio/GitHub
8. **Step 8**: Add a feature!

---

## 🔗 Important Links

| Resource | URL |
|----------|-----|
| OpenWeatherMap API | https://openweathermap.org/api |
| React Documentation | https://react.dev |
| Vite Documentation | https://vitejs.dev |
| MDN Web Docs (CSS) | https://developer.mozilla.org/en-US/docs/Web/CSS |
| JavaScript Guide | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide |

---

## 💥 Common Newbie Mistakes

❌ **Don't**: Commit `.env.local` to GitHub (API key exposed!)
✅ **Do**: Use `.env.local.example` and add to `.gitignore`

❌ **Don't**: Modify `package-lock.json` directly
✅ **Do**: Run `npm install` to update dependencies

❌ **Don't**: Add CSS like `<style>` tags in components
✅ **Do**: Use separate `.css` files or CSS modules

❌ **Don't**: Call async functions directly in render
✅ **Do**: Use `useEffect` hook

❌ **Don't**: Store API responses in state without checking
✅ **Do**: Validate data before using

---

**Print this card and keep it handy!** 📌

---

*Last updated: April 2026*
*Happy coding! 🚀*
