# ⛅ Weather App

A modern, responsive weather application built with React and Vite. This is a portfolio-ready project that fetches real-time weather data and displays it in a clean, intuitive interface.

## 🌟 Features

### Core Features
- **City Search**: Search for current weather by city name
- **Real-time Weather Data**: Fetches data from OpenWeatherMap API
- **Current Weather Display**: Shows temperature, weather condition, and icon
- **Detailed Weather Information**: Humidity, wind speed, feels-like temperature, and more
- **Recent Searches**: Keeps track of recently searched cities (limited to 6)
- **Persistent Storage**: Saves recent searches in browser localStorage
- **Loading State**: Shows spinner while fetching data
- **Error Handling**: User-friendly error messages for invalid input or API failures
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Empty State**: Clean empty state before first search

### Additional Details
- **Pressure**: Atmospheric pressure in hPa
- **Visibility**: Current visibility distance
- **Cloudiness**: Cloud coverage percentage
- **Sunrise/Sunset**: Times for sunrise and sunset
- **Location Info**: City name and country code

## 💻 Tech Stack

- **React 18**: Modern UI library
- **Vite**: Fast build tool and dev server
- **JavaScript (ES6+)**: No TypeScript - clean, readable code
- **React Hooks**: useState, useEffect for state management
- **Fetch API**: For weather API calls
- **CSS3**: Modern CSS with animations and responsive design
- **OpenWeatherMap API**: Real-time weather data
- **localStorage**: For persistent recent searches

## 📁 Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── WeatherSearch.jsx       # Search input and button
│   │   ├── WeatherCard.jsx         # Main weather display
│   │   ├── WeatherDetails.jsx      # Additional weather info
│   │   ├── RecentSearches.jsx      # Recent cities list
│   │   ├── Loader.jsx              # Loading spinner
│   │   ├── ErrorMessage.jsx        # Error display
│   │   └── EmptyState.jsx          # Initial empty state
│   ├── utils/
│   │   ├── api.js                  # OpenWeatherMap API calls
│   │   └── helpers.js              # Formatting and utility functions
│   ├── styles/
│   │   ├── app.css                 # Global styles
│   │   └── weather.css             # Component-specific styles
│   ├── App.jsx                     # Main app component
│   └── main.jsx                    # React DOM entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+ and npm installed
- A free OpenWeatherMap API key (get one at https://openweathermap.org/api)

### Step 1: Clone or Copy the Project
```bash
cd Weather
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Get a Free API Key
1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to your API keys section
4. Copy your API key

### Step 4: Set Up Environment Variable
Create a `.env.local` file in the project root:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

**Note**: Replace `your_api_key_here` with your actual API key from OpenWeatherMap.

### Step 5: Start the Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Step 6: Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 🎯 How to Use

1. **Search for a City**: Type any city name in the search box and click "Search"
2. **View Weather**: Current weather and detailed information will display
3. **Quick Re-search**: Click any recent search chip to quickly search again
4. **Persistent Storage**: Recent searches are automatically saved and restored on page reload

## 🔧 Key Implementation Details

### State Management

The app uses React hooks to manage its state in `App.jsx`:

```javascript
// Weather data from API
const [weatherData, setWeatherData] = useState(null)

// Loading state while fetching
const [loading, setLoading] = useState(false)

// Error messages
const [error, setError] = useState(null)

// Current search input
const [searchQuery, setSearchQuery] = useState('')

// List of recent searches
const [recentSearches, setRecentSearches] = useState([])
```

### API Fetching

The `fetchWeather()` function in `src/utils/api.js`:
- Takes a city name as input
- Makes an HTTPS request to OpenWeatherMap API
- Returns formatted weather data or throws a descriptive error
- Handles network failures and invalid cities gracefully

```javascript
const data = await fetchWeather(city)
// Returns: { city, country, temperature, condition, humidity, windSpeed, ... }
```

### Recent Searches & localStorage

When a search is performed:
1. The city name is added to the `recentSearches` array
2. Duplicates are removed (if searching for same city)
3. List is limited to 6 most recent searches
4. Array is instantly saved to `localStorage` via `useEffect`
5. On page load, saved searches are restored from `localStorage`

```javascript
// Save to localStorage
useEffect(() => {
  localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
}, [recentSearches])

// Load from localStorage
useEffect(() => {
  const saved = localStorage.getItem('recentSearches')
  if (saved) setRecentSearches(JSON.parse(saved))
}, [])
```

### Loading & Error Handling

**Loading State**:
- Set to `true` before API call
- Shows spinner component
- Set back to `false` when API completes

**Error Handling**:
- City not found → "City not found" message
- Invalid API key → "Invalid API key" message
- Network error → "Unable to fetch weather" message
- Input validation → "Please enter a city name"

## 📱 Responsive Design

The app uses CSS media queries for different screen sizes:
- **Desktop** (>640px): Full layout with side-by-side elements
- **Tablet** (640px): Stacked layout with optimized spacing
- **Mobile** (<380px): Simplified grid layout for small screens

All interactive elements have:
- Hover effects (desktop)
- Touch-friendly tap targets (mobile: 48px minimum)
- Proper spacing for readability

## 🎨 Styling Highlights

- **Gradient Background**: Beautiful purple gradient
- **Glass-morphism**: Frosted glass effect on cards
- **Smooth Animations**: Fade-in and slide-in effects
- **Color Palette**: Blue primary, orange secondary, red errors
- **Typography**: Clear hierarchy with meaningful sizing
- **Shadows**: Subtle depth with CSS shadows
- **Transitions**: Smooth hover and interaction effects

## 🔐 API Configuration

The app uses OpenWeatherMap's free tier which includes:
- Current weather for any city
- 60 API calls per minute limit
- Up to 1000 calls per day
- Full weather data (temperature, humidity, wind, etc.)

**API Endpoint Used**:
```
https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}
```

- `units=metric`: Returns temperature in Celsius
- Full documentation: https://openweathermap.org/current

## 🛣️ Future Enhancements

These features could be added to make the app even better:

- [ ] **5-Day Forecast**: Show weather predictions for next 5 days
- [ ] **Unit Toggle**: Switch between Celsius and Fahrenheit
- [ ] **Geolocation**: Auto-detect user's location and show local weather
- [ ] **Dark Mode**: Toggle between light and dark themes
- [ ] **Dynamic Backgrounds**: Change background based on weather condition
- [ ] **Search Suggestions**: Auto-complete city names as user types
- [ ] **Multiple Units**: Support for wind speed (mph vs m/s) and pressure units
- [ ] **Weather Alerts**: Show alerts for extreme weather conditions
- [ ] **Favorites**: Save favorite cities separately from recent searches
- [ ] **Analytics**: Track most searched cities

## 📦 Dependencies

- **react@^18.2.0**: UI library
- **react-dom@^18.2.0**: DOM rendering
- **vite@^5.0.0**: Build tool (dev)
- **@vitejs/plugin-react@^4.2.0**: React plugin for Vite (dev)

## 🤝 Contributing

This is a personal portfolio project, but feel free to:
- Use it as a reference for your own weather app
- Improve the design or functionality
- Add the features listed in "Future Enhancements"
- Customize colors, fonts, or layout to match your style

## 📸 Screenshots

[Add screenshots here showing:]
- App on desktop with weather data
- App on mobile
- Search functionality
- Recent searches
- Empty state

## 📄 License

MIT License - Feel free to use this project for learning or as a portfolio piece.

## 🙋 Support

If you encounter issues:

1. **Check your API key**: Verify it's correctly set in `.env.local`
2. **Check API limits**: Ensure you haven't exceeded free tier limits
3. **Try a common city**: Search for "London" or "New York" to test
4. **Check browser console**: Look for detailed error messages
5. **Test network**: Ensure you have internet connectivity

## ✨ Credits

- OpenWeatherMap for the weather data API
- Vite for the fast build tool
- React community for best practices
- Icons from Emojis

---

**Happy weather checking!** 🌤️

Built with ❤️ for the portfolio
