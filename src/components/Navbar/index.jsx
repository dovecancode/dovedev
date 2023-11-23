import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className={`nav-button ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="nav-button-container">
          <div className="menu">Menu</div>
          <div className={`nav-burger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="hidden" style={{ visibility: menuOpen ? 'visible' : 'hidden' }}>
        <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            home
          </Link>
          <Link to="/portfolios" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar
