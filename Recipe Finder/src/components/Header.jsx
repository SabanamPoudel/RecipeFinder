import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-emoji">🍳</span>
          <span className="logo-text">Recipe Finder</span>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
